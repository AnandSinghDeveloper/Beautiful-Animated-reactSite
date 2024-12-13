import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
  const cards= [useAnimation(), useAnimation()]
   const hoverHandler= (index)=>{
    cards[index].start({y:"0"})

   }

   const hoverHandlerEnd=(index)=>{
    cards[index].start({y:"100%"})
   }
    
  
  return (
    <div className=' w-full py-20 bg-[#f1f1f1] rounded-br-3xl rounded-bl-3xl'>
      <div className=' w-full px-20 border-b-[1px] border-zinc-200 pb-20  '>
        <h1 className=' text-6xl tracking-tight '> Featured projects </h1>
      </div>
      <div className=' px-20 '>
         
        <div className=' cards w-full flex gap-10 mt-10 b '>
          <motion.div onHoverStart={()=>hoverHandler(0)} onHoverEnd={()=>hoverHandlerEnd(0)} className=' container relative w-1/2 h-[75vh] '>
          <h1 className=' absolute text-8xl flex overflow-hidden  leading-none tracking-tighter left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 text-[#c8ed51] font-semibold'>
           {"FYDE".split('').map((item,index)=><motion.span 
              initial={{y:"100%"}}
              animate={cards[0]}
              transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
             
           className=' inline-block
           '>{item}</motion.span>)}
           </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden '>
              <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </motion.div>

          <motion.div onHoverStart={()=>hoverHandler(1)} onHoverEnd={()=>hoverHandlerEnd(1)} className=' container relative w-1/2 h-[75vh]  '>
          <h1 className=' absolute text-8xl flex overflow-hidden leading-none tracking-tighter right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-10 text-[#c8ed51] font-semibold'>
          {"VISE".split('').map((item,index)=><motion.span 
              initial={{y:"100%"}}
              animate={cards[1]}
              transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
             
           className=' inline-block
           '>{item}</motion.span>)}
          </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
