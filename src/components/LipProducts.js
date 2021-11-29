import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import MainNav from "./MainNav";

const LipProducts = () => {
    // Set all products from API to state
    const [products, setProduct] = useState([]);

    // Call API
    useEffect(() => {
        axios({
            url: "http://makeup-api.herokuapp.com/api/v1/products.json",
        }).then((response) => {
            setProduct(response.data);
            // console.log(response.data);
        });
    }, []);

    // Filter Products array for Lipstick & lip liner:
    const lipProducts = products.filter(
        (products) =>
            products.product_type === "lipstick" ||
            products.product_type === "lip_liner"
    );

    // Filter array for products that don't have a price & filter out products/pictures that don't fit:
    const lipProductAdj = lipProducts.filter(
        (products) =>
            products.price !== "0.0" &&
            products.price !== null &&
            products.name !== "Generation G" &&
            products.name !== "Lipstick" &&
            products.name !== "Lippie Stix" &&
            products.name !== "Lippie Pencil" &&
            products.name !== "Blotted Lip"
    );

    // Error handling for images that are broken
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }

    return (
        <div>
            <MainNav />
            <h2>Lip</h2>
            <ul className="productSection">
                {lipProductAdj.map((product) => {
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

export default LipProducts