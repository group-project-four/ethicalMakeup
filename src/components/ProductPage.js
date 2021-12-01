
import axios from 'axios'
import CustomerReview from './CustomerReview'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    // Setting state to hold the product info to be displayed
    const [individualProducts, setIndividualProduct] = useState({})
    // Setting productID as the params to use in the URL
    const productID = useParams()

    //The useEffext is used to call the api and pass in the product.Id of each individial product, this only happens when the product.id exists
    useEffect(() => {
        axios({
            // URL taking the productID params to link the url to the specific product the user clicks
            url: `http://makeup-api.herokuapp.com/api/v1/products/${productID.productID}.json`,
        }).then((response) => {
            setIndividualProduct(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
            }
        })
    }, [productID.productID])

    // Desctructuring the properties needed within the individualProducts state
    const { image_link, description, product_link, brand, name, rating } = individualProducts

    return (
        <div>
            {/* information about each individual product is displayed  */}
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
                {/* Calling the customer review param to show the customer review form & all reviews on each product */}
                <CustomerReview product={productID.productID}/>
            </section>

        </div>
    )
}

export default ProductPage