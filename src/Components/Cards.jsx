import React from 'react'

const Cards = () => {
  return (
    <div className=' w-full h-screen flex items-center px-32 gap-5 bg-[#f1f1f1]'>
       <div className="cardcontainer h-[50vh] w-1/2">
           <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
               <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg " alt="ochi" />
               <button className=' absolute left-10 bottom-10 px-4 py-1 rounded-full border-2 border-[#a1b562] text-[#a1b562] '>&copy;2024-2025</button>
           </div>
       </div>
       <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="star" />
          <button className=' absolute left-10 bottom-10 px-3 py-1 rounded-full border-2  border-white text-white uppercase tracking-tighter leading-none '>rating5.0 on clutch</button>
        
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
        <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className=' absolute left-10 bottom-10 px-3 py-1 rounded-full border-2 uppercase border-white text-white tracking-tighter leading-none '>business bootcamp</button>
        
        </div>

       </div>
      
    </div>
  )
}

export default Cards
