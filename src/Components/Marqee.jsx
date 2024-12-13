import { motion } from 'framer-motion'
import React from 'react'

const Marqee = () => {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1" className=' z-[99999] w-full py-14 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
      <div className=' text border-t-2 border-b-2 border-[#f1f1f1] flex whitespace-nowrap overflow-hidden pr-20 text-[#f1f1f1] '>
        <motion.h1 
             initial={{x:"0"}}
             animate={{x: "-100%"}}
             transition={{ repeat:Infinity,ease:"linear",duration:10}}
                       
        className=' text-[17vw] leading-none tracking-tighter pt-10 mb-10 font-bold uppercase pr-20 '> we are ochi</motion.h1>
        <motion.h1
         initial={{x:"0"}}
         animate={{x: "-100%"}}
         transition={{ repeat:Infinity,ease:"linear",duration:10}}
        
        className=' text-[17vw] leading-none tracking-tighter pt-10 mb-10 font-bold uppercase '> we are ochi</motion.h1>

      </div>
      
    </div>
  )
}

export default Marqee
