import axios from 'axios'
import { useEffect, useState } from 'react'
import Catalogue from './Catalogue'
import { Routes, Route, Link } from 'react-router-dom'

import NavbarTop from './NavbarTop'
import ProductPage from './ProductPage'
import Posts from './Posts'
import Pagination from './Pagination'

const MainPage = () => {
    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
            }
        }).then((response) => {
            if(response.data.length !== 0){
                // const firstTwenty = response.data.slice(0, 20)
                // setProduct(firstTwenty)
                setProduct(response.data)
                setLoading(false)
            }else(
                setErrorMessage('please enter a valid search term')
            )
        })
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <ul>
            <NavbarTop handleQuery={handleQuery} />
            <ul>
                {
                    currentPosts.map(product => {
                        return (
                            <div key={product.id}>
                                {product.name}
                                <Link to={`/${product.id}`}>
                                    <img
                                        src={product.image_link}
                                        alt={`product of ${product.brand} company`}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>

            <Posts products={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts = {products.length} paginate={paginate}/>

            </ul>

            {errorMessage}
        </div>
    )
}
export default MainPage