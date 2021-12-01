
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const EyeProducts = () => {
    // Set all products from API to state
    const [products, setProduct] = useState([])
    const [errorAPI, setErrorAPI] = useState('')

    // Call API
    useEffect(() => {
        axios({
            url: "http://makeup-api.herokuapp.com/api/v1/products.json",
            params: {
                // Filter the products by the product tag of vegan
                product_tags: "vegan"
            }
        }).then((response) => {
            setProduct(response.data);
        }).catch((error) => {
            if (error.response) {
                setErrorAPI('Sorry our API is unable to get the necessary information!')
            }
        })
    }, [])

    // Filter Products array for Mascara, EyeLiner & Eyeshadow:
    const eyeProducts = products.filter(
        (products) =>
            products.product_type === "mascara" ||
            products.product_type === "eyeliner" ||
            products.product_type === "eyeshadow"
    )

    // Filter array for products that don't have a price:
    const eyeProductAdj = eyeProducts.filter(
        (products) =>
            products.price !== "0.0" &&
            products.price !== null &&
            products.name !== "Liquid Eye Shadow"
    )

    // Error handling for images that are broken
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    return (
        <div>
            <div className="ApiError">{errorAPI}</div>
            <div className="sectionWrapper">
                <h2>Eye Makeup</h2>
                <ul className="productSection">
                    {/* Map through the final filtered array and return each result as an li item */}
                    {eyeProductAdj.map((product) => {
                        return (
                            // The user can click the product card anywhere if they want to see more info about it!
                            <Link to={`/${product.id}`}>
                                <li key={product.id} className="productCard">
                                    <img
                                        src={product.image_link}
                                        alt={product.name}
                                        onError={imgError}
                                    />
                                    <h3>{product.name}</h3>
                                    <p>$ {product.price}</p>
                                    <button>More Info</button>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default EyeProducts