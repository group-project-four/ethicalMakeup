
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//importing components
import Pagination from './Pagination'
import Posts from './Posts'

const SearchedProducts = (props) => {

    //defining setState to hold data from the api, an error message, current and posts per page
    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [errorAPI, setErrorAPI] = useState('')
    // const [emptyInputMessage, setEmptyInputMessage] = useState('Please enter a product name')

    //deconstructing productName imported from the component MainNav referenced to the user input search 
    const { productName } = useParams()

    //productName or the user's query is passed to handle query in a useEffect 
    useEffect(() => {
        handleQuery(productName)
    }, [productName])

    //handleQuery function calls the api, passes through the user's input
    //setProducts is assigned to the data from the api after the data is filtered to remove products without price
    //then using an if statement for when there is no results setError message
    const handleQuery = (query) => {
        axios({
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
                product_tags: "vegan"
            }
        }).then((response) => {
            if (response.data.length !== 0) {
                const dataToFilter = response.data
                const filteredData = dataToFilter.filter((productFiltered) => {
                    return productFiltered.price > 0.0
                })
                setProduct(filteredData)
                setErrorMessage('')
                setPostsPerPage(16)
            } else {
                setProduct([])
                setErrorMessage('There were no products found!')
            }
        }).catch((error) => {
            if (error.response) {
                setErrorAPI('Sorry our API is unable to get the necessary information!')
            }
        })
    }

    //function is called when alphabetical option is selected
    const handleChangeOption = (event) => {
        if (event.target.value === 'alphabetical') {
            //a copy of all the data is made so it can be sorted alphabetically
            const copyOfProducts = [...products]
            const orderedPrice = copyOfProducts.sort((a, b) => {
                return a.name > b.name
            })
            //set product is updated to alphabetical order
            setProduct(orderedPrice)
        }
    }

    //pagination: defining index of last and first post and further slicing the array with all the api data and saving it in a constant called currentPosts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    return (
        <div className="sectionWrapper wrapper">
            <div className="ApiError">{errorAPI}</div>
            {
                // productName == "" ? (
                //     <div className="error">
                //             <p>{emptyInputMessage}</p>
                //     </div>
                // ) :
                products.length > 0 ?
                    (
                        <div>
                            <section>
                                <label htmlFor="sorting"></label>
                                <select name="sorting" id="sorting" onChange={handleChangeOption} className="sorting" tabIndex='0'>
                                    <option value defaultValue>Sort by</option>
                                    <option value="alphabetical">alphabetical</option>
                                </select>
                            </section>
                            <ul className="productSection">
                                {
                                    currentPosts.map(product => {
                                        return (
                                            <div key={product.id} className="productCard">
                                                <Link to={`/${product.id}`}>
                                                    <img
                                                        src={product.image_link}
                                                        alt={`product of ${product.brand} company`}
                                                        onError={imgError}
                                                    />
                                                </Link>
                                                <h3>{product.name}</h3>
                                                <p>${product.price}</p>
                                                <Link to={`/${product.id}`}>
                                                    <button>More Info</button>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) :
                    (
                        <div className="error">
                            <p>{errorMessage}</p>
                        </div>
                    )
            }
            {/* importing page number components */}
            <Posts products={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
        </div>
    )
}

export default SearchedProducts