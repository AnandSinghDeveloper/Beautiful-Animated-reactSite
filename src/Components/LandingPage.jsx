import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {

  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full h-screen bg-[#f1f1f1] pt-1'>
      <div className="textStructure mt-40 px-20">
          {["we create ","eye-opning","presentation"].map((item,index)=>{
            return <div className="masker">
           <div className=' w-fit flex items-end '>
            { index === 1 && (
              <motion.div 
              initial={{width:0}}
              animate={{width:" 9vw"}}
              transition={{ease:[0.76,0,0.24,1] , duration: 1 }}
              className=' mr-3 w-[7vw] rounded-md h-[4.8vw] -top-2 relative bg-green-600 '>
                <img className=' w-full h-full overflow-hidden object-cover rounded-lg ' src="https://www.bleepstatic.com/content/hl-images/2023/04/19/papercut-jeader.jpg" alt="" />
                
              </motion.div>
            )}
            
           <h1 id='font' className=" uppercase text-8xl leading-[5.6vw]   font-medium  font-bold "> {item}</h1>
           </div>
  
          </div> 
          
          })}

          
        
      </div>
      <div className=' border-t-[1px] border-zinc-500 mt-32 flex justify-between items-center px-20 py-5 '>
      {["For the Public and private companies","For the first pitch ot IPO"].map((item,idx)=><p className=' text-md font-light tracking-[-0.4] leading-none'>{item}</p>)}
      <div className='start flex gap-1'>
        <div className=' px-5 py-2 border-[2px] font-light text-sm border-zinc-500 rounded-full uppercase '> Start the Project </div>
           <div className=' w-10 h-10 border-zinc-500 border-[2px] rounded-full flex items-center justify-center '>
            <span className=' rotate-45'>
            <FaArrowUpLong />
            </span>
           </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage
