
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente nemo modi dicta libero soluta quibusdam ea illo asperiores.</p>
                    <Link to="catalogue">
                     <button>Discover More</button>
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
                        {/* <figure className="top-left"> */}
                            <img src={topLeft} alt="" />
                        {/* </figure> */}
                        {/* <figure className="top-right"> */}
                            <img src={topRight} alt="" />
                        {/* </figure> */}
                        {/* <figure className="bottom-right"> */}
                            <img src={bottomRight} alt="" />
                        {/* </figure> */}
                        {/* <figure className="bottom-left"> */}
                            <img src={bottomLeft} alt="" />
                        {/* </figure> */}
                        
                    </div>
                </div>
            </section>
            <section className="philosophy" id='aboutUs'>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dolor quod totam eius ea asperiores. In, iure. Nisi possimus, tempora vero culpa provident nulla similique eos fugiat, doloribus veniam illo.</h2>
            </section>
            <section className="ready">
                <h3>Ready to get started?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio quod illo atque fuga beatae soluta corporis autem placeat, veritatis provident deserunt laudantium nulla ratione incidunt, dolor voluptate id cum!</p>
                <button>Start free trial</button>
            </section>
        </main>
    )
}

export default HomePage

