import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className=' w-full h-screen bg-zinc-900 pt-1'>
      <div className="textStructure mt-40 px-20">
          {["we create ","eye-opning","presentation"].map((item,index)=>{
            return <div className="masker">
            <h1 className=" uppercase text-8xl leading-[5.5vw] tracking-tighter  font-medium font-semiblod "> {item}</h1>
  
          </div> 
          
          })}

          
        
      </div>
      <div className=' border-t-[2px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5 '>
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
