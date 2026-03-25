/* styles import */
import './style.css'

/* package import */
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {

    return (
        <footer>

            <div className="top">
                <ul className="social_media">
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div>

            <div className="bottom">
                <p className="copy_right">
                    <span>Costs </span>
                    &copy; 2026
                </p>
            </div>

        </footer>
    )
}

export default Footer