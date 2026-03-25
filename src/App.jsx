/* styles import */
import './App.css';

/* package imports */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* pages import */
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'

/* components import */
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

function App() {
  return (
    <Router>

      <Navbar />

      <main>

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
