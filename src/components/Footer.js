import { SiLinkedin } from "react-icons/si"
import { SiTwitter } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import { Link } from 'react-router-dom'
import Logo from '../images/EthicalMakeupLogo.png'

const Footer = () => {
    return (
        <footer>
            <div className="topSection">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Blog</Link></li>
                </ul>
                <div className="logoContainer2">
                    <img src={Logo} alt="Ethical Makeup Logo" className="footerLogo" />
                </div>
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><Link to="/catalogue">Catalogue</Link></li>
                </ul>
            </div>
            <div className="bottomSection">
                <ul className="icons">
                    <li><a href="#" className="icon"><SiLinkedin /></a></li>
                    <li><a href="#" className="icon"><SiTwitter /></a></li>
                    <li><a href="#" className="icon"><SiInstagram /></a></li>
                </ul>
                <p>Made at <a href="https://junocollege.com">Juno College</a> by Dani, Ibrahim, James and Parisa</p>
            </div>
        </footer>
    )
}
export default Footer