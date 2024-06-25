
import './App.css'
import Experience from './components/Experience/Experience';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Techstack from './components/Techstack/Techstack';




function App() {
  return(
    <div className='app'>
      <Navbar/>
      <Homepage/>
      <Techstack/>
      <Experience/>
      <Projects/>
     
     
    </div>
  )
}

export default App
