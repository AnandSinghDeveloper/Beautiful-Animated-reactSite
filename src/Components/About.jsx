import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.3" className=' w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl rounded-b-3xl text-black '>

      <h1 className=' text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.   
      </h1>
      <div  className=' w-full flex gap-5 border-t-2 border-[#a1b562] pt-10 mt-20 '>
        <div className=' w-1/2'>
        <h1 className=' text-7xl'> Our Approach:</h1>
        <button className=' flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white'>Read more
          <div className=' rounded-full w-2 h-2 bg-zinc-100'></div>
        </button>
        
        </div>
        <div id='img' className=' w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
      </div>
    </div>
  )
}

export default About
