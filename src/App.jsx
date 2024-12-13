import About from "./Components/About"
import Eyes from "./Components/Eyes"
import Featured from "./Components/Featured"
import LandingPage from "./Components/LandingPage"
import Marqee from "./Components/Marqee"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import LocomotiveScroll from 'locomotive-scroll';

function App() {

 

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className=' w-full h-screen  text-black  bg-[#f1f1f1]'>

     <Navbar/>
     <LandingPage/>
     <Marqee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Cards/>
     <Footer/>

    </div>
     
  )
}

export default App
