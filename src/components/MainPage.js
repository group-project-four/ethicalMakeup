import axios from 'axios'
import { useEffect, useState } from 'react'
import Catalogue from './Catalogue'
import { Routes, Route, Link } from 'react-router-dom'

import NavbarTop from './NavbarTop'
import ProductPage from './ProductPage'
<<<<<<< HEAD
import Posts from './Posts'
import Pagination from './Pagination'
// import SortingOptions from './SortingOptions'
=======
>>>>>>> 31788b35fa29daf9daf88920d8d930e1fba097b8

const MainPage = () => {
    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [sortedProducts, setSortedProducts] = useState([])

    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
            }
        }).then((response) => {
            if(response.data.length !== 0){
<<<<<<< HEAD
                console.log(response.data)
                // const firstTwenty = response.data.slice(0,20)
                setProduct(response.data) 
                setLoading(false)
                setErrorMessage('')
=======
                const firstTwenty = response.data.slice(0, 20)
                setProduct(firstTwenty)
>>>>>>> 31788b35fa29daf9daf88920d8d930e1fba097b8
            }else(
                setErrorMessage('please enter a valid search term')
            )
        })
    }

<<<<<<< HEAD
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    let filteredPrice = currentPosts.filter((productFiltered) => {
        return productFiltered.price > 0.0
    })

    const handleChangeOption = (event) => {
        console.log(event.target.value)
    
        if(event.target.value == 'alphabetical'){
            const orderedPrice = filteredPrice.sort((a, b) => {
                return a.name > b.name
            })
            filteredPrice = [...orderedPrice]
            console.log(filteredPrice)
        }else{
            return filteredPrice
        }
    }
    console.log(filteredPrice)

=======
>>>>>>> 31788b35fa29daf9daf88920d8d930e1fba097b8
    return (
        <div>
            <ul>
            <NavbarTop handleQuery={handleQuery} />
<<<<<<< HEAD
            {errorMessage}
            <section>
                <label htmlFor="sorting"></label>
                <select name="sorting" id="sorting" onChange={handleChangeOption}>
                    <option value defaultValue>Sort by</option>
                    <option value="price">price</option>
                    <option value="alphabetical">alphabetical</option>
                    <option value="rating">rating</option>
                </select>
            </section>
            {/* <SortingOptions filteredPrice={filteredPrice}/> */}
=======
>>>>>>> 31788b35fa29daf9daf88920d8d930e1fba097b8
            <ul>
                {
                    products.map(product => {
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
            </ul>
            {errorMessage}
        </div>
    )
}
export default MainPage