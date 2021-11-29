import MainNav from "./MainNav"
import { useEffect} from "react"
import {useState} from 'react'
import axios from 'axios'
import Notable from './Notable'

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

    /**
     * goal is to get 6 products that are using the vegan tag and display it to the page
     */
    return (
        <main>
            <MainNav />
            <section className="header">
                <h1>Value Proposition</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente nemo modi dicta libero soluta quibusdam ea illo asperiores.</p>
                <button>Start free trial</button>
            </section>
            
            <section className="products">
                <Notable array={temp} /> 
            </section>
            <section className="feature">
                <div className="featureContentContainer">
                    <div>
                        <h2>Your best Value Propositon</h2>
                        <p>"If you don't try this app, you won't become the superhero you were meant to be"</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="philosophy">
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

