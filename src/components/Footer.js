import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            <div className="topSection">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <p>Ethical Makeup</p>
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Catalogue</a></li>
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