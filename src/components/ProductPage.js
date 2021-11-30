import axios from 'axios'
import CustomerReview from './CustomerReview'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MainNav from './MainNav'



const ProductPage = () => {
    const [individualProducts, setIndividualProduct] = useState({})
    const productID = useParams()

    useEffect(() => {
        axios({
            url: `http://makeup-api.herokuapp.com/api/v1/products/${productID.productID}.json`,
        }).then((response) => {
            setIndividualProduct(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
            }
        })
    }, [])
    const { image_link, description, product_link, brand, name, rating } = individualProducts
    return (
        <div>
            <MainNav />
            <section className="productInfoContainer">
                <div className="column1">
                    <img
                        src={image_link}
                        alt={`product of ${brand} brand`}
                    />
                </div>
                <div className="column2">
                    <h2>{name}</h2>
                    <p className="rating">Rating: {rating} / 5</p>
                    <p className="description">{description}</p>
                    <a className="productLink" href={product_link}>Purchase</a>
                </div>
            </section>
            <section className="productReviewContainer">
                <CustomerReview product={productID.productID} />
            </section>

        </div>
    )
}
export default ProductPage