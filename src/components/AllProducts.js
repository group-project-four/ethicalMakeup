
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Posts from './Posts'

//this page is dedicated to when the user searches an empty string to display all the products available
const AllProducts = () => {
    const [products, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [errorAPI, setErrorAPI] = useState('')

    //no query is passed in the handleQuery where the api is called
    useEffect(() => {
        handleQuery()
    }, [])

    //calling the api and fetching the data to setProduct to response
    const handleQuery = (query) => {
        axios({
            url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
                product_tags: "vegan"
            }
        }).then((response) => {
            if (response.data.length !== 0) {
                setProduct(response.data)
                setPostsPerPage(16)
            }
        }).catch((error) => {
            if (error.response) {
                setErrorAPI('Sorry our API is unable to get the necessary information!')
            }
        })
    }

    //filtering products without any price
    const filteredPrice = products.filter((productFiltered) => {
        return productFiltered.price > 0.0
    })

    const imgError = (image) => {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    //pagination: defining index of last and first post and further slicing the array with all the api data and saving it in a constant called currentPosts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPrice.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <div className="ApiError">{errorAPI}</div>
            <ul className="productSection">
                {/* mapping through currentPosts in order to diplay the information on the page */}
                {
                    currentPosts.map(product => {
                        return (
                            <div key={product.id} className="productCard">
                                {/* Linking the images to the product page */}
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
            {/* importing page number components */}
            <Posts products={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
        </div>
    )

}

export default AllProducts