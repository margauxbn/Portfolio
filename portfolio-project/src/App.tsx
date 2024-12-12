import './App.css'
import NavBar from './components/navbar/navBar'
import Banner from './components/banner/banner'
import Presentation from "./components/presentation/presentation"
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Background from './components/background/background'

function App() {

  return (
    <>  
      <NavBar />
      <Banner />
      <Presentation />
      <Skills />
      <Background />
      <Projects />
      <Footer />
    </>
  )
}

export default App
