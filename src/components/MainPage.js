import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import NavbarTop from './NavbarTop'
import ProductPage from './ProductPage'

const MainPage = () => {
    const [products, setProduct] = useState([])

    // useEffect(() => {
    //     axios({
    //         url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
    //         params: {
    //             brand: 'maybelline',
    //             product_type: 'lipstick',
    //         }
    //     }).then((response) => {
    //         setProduct(response.data)
    //     })
    // }, [])

    const handleQuery = (query) => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_type: query,
            }
        }).then((response) => {
            setProduct(response.data)
            console.log(response.data)
        })
    }

    return (
        <div>
            <NavbarTop handleQuery={handleQuery} />
            <ul>
                {
                    products.map(product => {
                        return (
                            <>
                                {product.name}
                                <Link to={`/${product.id}`}>
                                    <img
                                        src={product.image_link}
                                        alt={`product of ${product.brand} company`}
                                    />
                                </Link>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MainPage