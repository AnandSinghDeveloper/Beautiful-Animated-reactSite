import About from "./Components/About"
import Eyes from "./Components/Eyes"
import LandingPage from "./Components/LandingPage"
import Marqee from "./Components/Marqee"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <div className=' w-full h-screen  text-black'>

     <Navbar/>
     <LandingPage/>
     <Marqee/>
     <About/>
     <Eyes/>

    </div>
     
  )
}

export default App
