import axios from "axios";
import { useEffect, useState } from "react";

const Catalogue = () => {
    // Set all products from API to state
    const [products, setProduct] = useState([]);
    // Set state of carousel
    const [current, setCurrent] = useState(0)

    


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
        (products) => (products.product_type === "mascara") || (products.product_type === "eyeliner") || (products.product_type === "eyeshadow") 
    );

    // Filter Products array for Lipstick & lip liner:
    const lipProducts = products.filter(
        (products) => (products.product_type === "lipstick") || (products.product_type === "lip_liner")
    );

    // Filter Products array for Foundation, bronzer & blush:
    const faceProducts = products.filter(
        (products) =>  (products.product_type === "bronzer") || (products.product_type === "foundation") || (products.product_type === "blush")
    );

  
    // Error handling for images that are broken
    function imgError(image) {
        image.target.src = "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    }

    // Filter three arrays for products that don't have a price & filter out products/pictures that don't fit:
    const eyeProductAdj = eyeProducts.filter((products) => (products.price !== "0.0" && (products.price !== null)) && (products.name !== "Liquid Eye Shadow"))
    const lipProductAdj = lipProducts.filter((products) => (products.price !== "0.0" && (products.price !== null)) && (products.name !== "Generation G") && (products.name !== "Lipstick") && (products.name !== "Lippie Stix") && (products.name !== "Lippie Pencil") && (products.name !== "Blotted Lip"))
    const faceProductAdj = faceProducts.filter((products) => (products.price !== "0.0" && (products.price !== null)) && (products.name !== "No Filter Foundation") && (products.name !== "Serum Foundation") && (products.name !== "Coverage Foundation") && (products.name !== "Cloud Paint") && (products.name !== "Stretch Concealer") && (products.name !== "Wowder") && (products.name !== "Haloscope") && (products.name !== "Perfecting Skin Tint"))
    

    return (
        <main>
            <section className="eyeMakeupSection">
                {/* Product_types: eyeshadow, eyeliner, mascara, eyebrow */}
                <h2>Eye</h2>
                <div className="sectionCarousel">
                    {
                        eyeProductAdj.map(product => {
                            // let price = product.price
                            // let roundedPrice = price.toFixed(2)
                            return (
                                <div key={product.id}>
                                    <img src={product.image_link} alt={product.name} onError={imgError} />
                                    <h3>{product.name}</h3>
                                    <p>$ {product.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="lipMakeupSection">
                {/* Product_types: lipstick, lipliner */}
                <h2>Lip</h2>
                <div className="sectionCarousel">
                    {
                        lipProductAdj.map(product => {
                            return (
                                <div key={product.id}>
                                    <img src={product.image_link} alt={product.name} onError={imgError} />
                                    <h3>{product.name}</h3>
                                    <p>$ {product.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="faceMakeupSection">
                {/* Product_types: foundation, blush, bronzer*/}
                <h2>Face</h2>
                <div className="sectionCarousel">
                 {
                        faceProductAdj.map(product => {
                            return (
                                <div key={product.id}>
                                    <img src={product.image_link} alt={product.name} onError={imgError} />
                                    <h3>{product.name}</h3>
                                    <p>$ {product.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    );
};

export default Catalogue;
