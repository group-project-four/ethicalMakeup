
import { Link } from 'react-router-dom'

const Catalogue = () => {
    return (
        <main>
            <Link to="eyeproducts">
                <div className="imgContainer">
                    <section className="eyeMakeupSection img">
                        <h2>Eye</h2>
                        <button className="catalogueButton">Shop More Eye</button>
                    </section>
                    <div className="overlay"></div>
                </div>

            </Link>
            <Link to="lipproducts">
                <div className="imgContainer">
                    <section className="lipMakeupSection">
                        <h2>Lip</h2>
                        <button className="catalogueButton">Shop More Lip</button>
                    </section>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="faceproducts">
                <div className="imgContainer">
                <section className="faceMakeupSection">
                    <h2>Face</h2>
                    <button className="catalogueButton">Shop More Face</button>
                </section>
                <div className="overlay"></div>
                </div>
            </Link>
        </main>
    )
}

export default Catalogue


