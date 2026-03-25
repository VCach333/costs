/* styles import */
import './App.css';

/* package imports */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

/* pages import */
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <nav>
        
        <div className="logo">
          <img src="../public/favicon.ico" alt="Costs" />
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

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>

    </Router>
  );
}

export default App;
