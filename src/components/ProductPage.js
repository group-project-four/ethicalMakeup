import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductPage = () => {
    const [individualProducts, setIndividualProduct] = useState({})
    const productID = useParams()

    useEffect(() => {
        axios({
            url: `http://makeup-api.herokuapp.com/api/v1/products/${productID.productID}.json`,
        }).then((response) => {
            setIndividualProduct(response.data)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            })
    }, [])

    const { image_link, description, product_link, brand, name, rating } = individualProducts
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{rating}</p>
            <img
                src={image_link}
                alt={`product of ${brand} brand`}
            />
            <a href={product_link}>Product link</a>
        </div>
    )
}
export default ProductPage