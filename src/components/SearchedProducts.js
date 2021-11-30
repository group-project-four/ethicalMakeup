import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Pagination from './Pagination'
import Posts from './Posts'

const SearchedProducts = (props) => {

    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [orderedPost, setOrderedPost] = useState([])

    const { productName } = useParams()

    useEffect(() => {
        handleQuery(productName)
    }, [productName])

    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
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
                setLoading(false)
                setErrorMessage('')
            } else {
                setProduct([])
                setErrorMessage('There were no products found!')
            }
        })
    }

    const handleChangeOption = (event) => {
        console.log(event.target.value)  

        if(event.target.value == 'alphabetical'){
            const copyOfProducts =[...products]
            const orderedPrice = copyOfProducts.sort((a, b) => {
                return a.name > b.name
            })
            setProduct(orderedPrice)   
        }
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }
    return (
        <div className="sectionWrapper">
            {
                products.length > 0 ?
                    (<div>
                        <section>
                            <label htmlFor="sorting"></label>
                            <select name="sorting" id="sorting" onChange={handleChangeOption}>
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
                                            <button>More Info</button>
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

            <Posts products={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
        </div>
    )

}
export default SearchedProducts