import axios from 'axios'
import { useEffect, useState } from 'react'
import Catalogue from './Catalogue'
import { Routes, Route, Link } from 'react-router-dom'
import { useLocation} from 'react-router-dom'



// import NavbarTop from './NavbarTop'
import ProductPage from './ProductPage'
import Posts from './Posts'
import Pagination from './Pagination'
// import SearchedProducts from './SearchedProducts'
import { useParams } from 'react-router-dom'
// import SortingOptions from './SortingOptions'

const SearchedProducts = () => {

    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    // const [sortedProducts, setSortedProducts] = useState([])
    // const [inputSearch, setInputSearch] = useState('')

    // const {inputSearch} = useParams()
    const location = useLocation()
    const {from} = location.state

    useEffect((props) => {
        axios({
            url: `http://makeup-api.herokuapp.com/api/v1/products.json?${productType.inputSearch}`,
            params: {
                product_type: props,
            }
        }).then((response) => {
            if (response.data.length !== 0) {
                console.log(response.data)
                // const firstTwenty = response.data.slice(0,20)
                setProduct(response.data)
                setLoading(false)
                setErrorMessage('')
            } else (
                setErrorMessage('please enter a valid search term')
            )
        })
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const filteredPrice = currentPosts.filter((productFiltered) => {
        return productFiltered.price > 0.0
    })


    // if(props){
    return (
        <div>
            {errorMessage}
            <ul>

                {
                    filteredPrice.map(product => {
                        return (
                            <div key={product.id}>
                                {product.name}
                                <Link to={`/${product.id}`}>
                                    <img
                                        src={product.image_link}
                                        alt={`product of ${product.brand} company`}
                                    />
                                </Link>
                                {product.price}{product.price_sign}
                            </div>
                        )
                    })
                }
            </ul>
            <Posts products={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
        </div>
    )

    // }else{
    //     return(
    //         <div></div>
    //     )
    // }

}
export default SearchedProducts