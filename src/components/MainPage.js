import axios from 'axios'
import { useEffect, useState } from 'react'
import Catalogue from './Catalogue'
import { Routes, Route, Link } from 'react-router-dom'

import NavbarTop from './NavbarTop'
import ProductPage from './ProductPage'

const MainPage = () => {
    const [products, setProduct] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
            }
        }).then((response) => {
            if(response.data.length !== 0){
                const firstTwenty = response.data.slice(0, 20)
                setProduct(firstTwenty)
            }else(
                setErrorMessage('please enter a valid search term')
            )
        })
    }

    return (
        <div>
            <ul>
            <NavbarTop handleQuery={handleQuery} />
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