import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const FaceProducts = () => {
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

    // Filter Products array for Foundation, bronzer & blush:
    const faceProducts = products.filter(
        (products) =>
            products.product_type === "bronzer" ||
            products.product_type === "foundation" ||
            products.product_type === "blush"
    );


    // Filter array for products that don't have a price & filter out products/pictures that don't fit:
    const faceProductAdj = faceProducts.filter(
        (products) =>
            products.price !== "0.0" &&
            products.price !== null &&
            products.name !== "No Filter Foundation" &&
            products.name !== "Serum Foundation" &&
            products.name !== "Coverage Foundation" &&
            products.name !== "Cloud Paint" &&
            products.name !== "Stretch Concealer" &&
            products.name !== "Wowder" &&
            products.name !== "Haloscope" &&
            products.name !== "Perfecting Skin Tint"
    );

    // Error handling for images that are broken
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    return (
        <div>
            <h2>Face</h2>
            <ul className="productSection">
                {faceProductAdj.map((product) => {
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

export default FaceProducts