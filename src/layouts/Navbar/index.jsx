/* styles import */
import './style.css'

/* package import */
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <nav>
                <div className="logo">
                    <img src="../../../public/favicon-cach-purple.png" alt="Costs" />
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