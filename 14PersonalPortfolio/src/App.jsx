import './App.css'
import Achievements from './components/common/achievements/Achievements'
import Home from './components/common/home/Home'
import Navbar from './components/common/navbar/Navbar'
import Projects from './components/common/projects/Projects'
import Skills from './components/common/skills/Skills'

function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Achievements />
      <Projects />
    </>
  )
}

export default App
