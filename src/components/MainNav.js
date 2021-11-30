import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"

import SearchedProducts from './SearchedProducts'
import Pagination from './Pagination'
import Posts from './Posts'

const MainNav = () => {
    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(16)
    const [inputSearch, setInputSearch] = useState('')

    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
                product_tags: "vegan"
            }
        }).then((response) => {
            if (response.data.length !== 0) {
                console.log(response.data)
                setProduct(response.data)
                setLoading(false)
                setErrorMessage('')
            } else (
                setErrorMessage('There were no products found!')
            )
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleQuery(inputSearch)
    }

    const filteredPrice = products.filter((productFiltered) => {
        return productFiltered.price > 0.0
    })

    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }

    const handleSearchTag = (event) => {
        event.target.style.display = 'none'
    }

    const handleSearchBar = (event) => {
        event.target.style.width = '200px'
        event.target.style.border = 'black solid 2px'
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPrice.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <ul>
                <div className="topBar">
                    <nav>
                        <ul className="left">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <Link to="catalogue">Catalogue</Link>
                            </li>
                        </ul>
                    </nav>
                    <form onSubmit={handleFormSubmit} className="right">
                        <label htmlFor="searchTab"></label>
                        <div>
                            <BsSearch onMouseOver={handleSearchTag} />
                                <input
                                    type="text"
                                    id="searchTab"
                                    value={inputSearch}
                                    onChange={handleChange}
                                    onMouseOver={handleSearchBar}
                                />
                        </div>
                    </form>
                </div>
                <div className="error">
                    <p>{errorMessage}</p>
                </div>
                <SearchedProducts currentPosts={currentPosts} />
                <Posts products={currentPosts} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
            </ul>
        </div>
    )
}
export default MainNav