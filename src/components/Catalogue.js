import { Routes, Route, Link } from 'react-router-dom'

import MainNav from './MainNav';

const Catalogue = () => {



    // Error handling for images that are broken
    function imgError(image) {
        image.target.src =
            "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    }



    return (
        <main>
            <MainNav />
            <Link to="eyeproducts">
                <section className="eyeMakeupSection">
                    <h1>Eye</h1>
                </section>
            </Link>

            <Link to="lipproducts">
                <section className="lipMakeupSection">
                    <h1>Lip</h1>
                </section>
            </Link>

            <Link to="faceproducts">
                <section className="faceMakeupSection">
                    <h1>Face</h1>
                </section>
            </Link>

        </main>
    );
};

export default Catalogue


