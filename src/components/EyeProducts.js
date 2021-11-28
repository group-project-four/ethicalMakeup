import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const EyeProducts = () => {
    // Set all products from API to state
    const [products, setProduct] = useState([]);

    // Call API
    useEffect(() => {
        axios({
            url: "http://makeup-api.herokuapp.com/api/v1/products.json",
        }).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        });
    }, []);

    // Filter Products array for Mascara, EyeLiner & Eyeshadow:
    const eyeProducts = products.filter(
        (products) =>
            products.product_type === "mascara" ||
            products.product_type === "eyeliner" ||
            products.product_type === "eyeshadow"
    );

    // Filter array for products that don't have a price & filter out products/pictures that don't fit:
    const eyeProductAdj = eyeProducts.filter(
        (products) =>
            products.price !== "0.0" &&
            products.price !== null &&
            products.name !== "Liquid Eye Shadow"
    );

    // Error handling for images that are broken
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    return (
        <div>
            <h2>Eye</h2>
                <ul className="productSection">
                    {eyeProductAdj.map((product) => {
                        // let price = product.price
                        // let roundedPrice = price.toFixed(2)
                        return (
                            <Link to={`/${product.id}`}>
                                <li key={product.id}>
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
    )
}

export default EyeProducts