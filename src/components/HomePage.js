
import { useEffect} from "react"
import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Notable from './Notable'
import topLeft from '../images/skincare-and-makeup-masterclass-16103245.jpg'
import topRight from '../images/tp-best-natural-makeup-looks-1.jpg'
import bottomRight from '../images/headerImage.jpg'
import bottomLeft from '../images/Danessa-1-1551x1000.jpg'

const HomePage = () => {
    const [temp,setTemp] = useState([])
    useEffect(() => {
        axios({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
            params: {
                product_tags: 'Vegan',
                price_less_than: 5,
                rating_greater_than: 4.3
            }
        }).then(response => {
            setTemp(response.data)
        })
    },[])

    return (
        <main>
            <div className="headerContainer">
                <section className="header">
                    <h1>Value Proposition</h1>
                    <p>Sustainable and eco-friendly friendly makeup to achieve sustainable beauty.</p>
                    <Link to="catalogue">
                     <button>Shop</button>
                    </Link>
                </section>
                <div className="overlay2"></div>
            </div>
            
            <section className="products">
            <h2>The best vegan makeup for under $5</h2>
                <Notable array={temp} /> 
            </section>
            <section className="feature">
                <div className="featureContentContainer">
                    <div className="containerHeader">
                        <h2>Eyes. Face. Lip. Color.</h2>
                        <p>Show us how you make it work</p>
                    </div>
                    <div className="featureContentImages">
                            <img src={topLeft} alt="two female models posing together" className="pic1" />
                            <img src={topRight} alt="one female model touching her lip" className="pic2" />
                            <img src={bottomRight} alt="three models with nice makeup on" className="pic3" />
                            <img src={bottomLeft} alt="flatlay of pink makeup on pink background" className="pic4" />
                    </div>
                </div>
            </section>
            <section className="philosophy" id='aboutUs'>
                <h2>We start with 100% vegan ingredients and we apply effective formulas. Ethical Makeup aims to reduce the negative impact of waste packaging that contaminates our planet.</h2>
            </section>
            <section className="ready">
                <h3>Ready to get started?</h3>
                <p>We’re all about makeup that enhances natural beauty.</p>
                <button>Start free trial</button>
            </section>
        </main>
    )
}

export default HomePage

