import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Internship from './components/Internship'
import { NavBar } from './components/NavBar'
import Project from './components/Project'
import Skills from './components/Skills'
import './index.css'

function App() {

  return (
    <>
      <NavBar />
      <About />
      <Education />
      <Internship />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
