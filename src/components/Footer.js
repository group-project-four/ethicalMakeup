import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="topSection">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
                <p>Ethical Makeup</p>
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li>
                        <Link to="/catalogue">Catalogue</Link>
                    </li>
                </ul>
            </div>
            <div className="bottomSection">
                <ul className="icons">
                    <li><a href="#"><SiLinkedin /></a></li>
                    <li><a href="#"><SiTwitter /></a></li>
                    <li><a href="#"><SiInstagram /></a></li>
                </ul>
                <p>Made at <a href="https://junocollege.com">Juno College</a> by Dani, Ibrahim, James and Parisa</p>
            </div>
        </footer>
    )
}
export default Footer