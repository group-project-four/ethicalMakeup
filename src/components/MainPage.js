import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MainPage = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                brand: 'maybelline',
                product_type: 'lipstick',
            }
        }).then((response) => {
            setProduct(response.data)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    products.map(product => {
                        return(
                            <li>{product.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MainPage