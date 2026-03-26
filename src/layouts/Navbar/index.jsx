/* styles import */
import './style.css'

/* assets import */
import logo from '../../assets/favicon-cach-purple.png'

/* package import */
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Costs" />
                </div>

                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar