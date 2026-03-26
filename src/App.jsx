/* styles import */
import './App.css';

/* package imports */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* pages import */
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import NewProjectPage from './pages/NewProjectPage'

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
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/projects/new' element={<NewProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
