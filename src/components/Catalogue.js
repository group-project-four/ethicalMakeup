
import { Link } from 'react-router-dom'
// import {Routes, Route } from 'react-router-dom'

const Catalogue = () => {
    return (
        <main>
            <Link to="eyeproducts">
                <div className="imgContainer">
                    <section className="eyeMakeupSection img">
                        <h1>Eye</h1>
                    </section>
                    <div className="overlay"></div>
                </div>

            </Link>
            <Link to="lipproducts">
                <div className="imgContainer">
                    <section className="lipMakeupSection">
                        <h1>Lip</h1>
                    </section>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="faceproducts">
                <div className="imgContainer">
                <section className="faceMakeupSection">
                    <h1>Face</h1>
                </section>
                <div className="overlay"></div>
                </div>
            </Link>
        </main>
    );
};

export default Catalogue


