import React from 'react'

const Eyes = () => {
  return (
    <div className=' eyes w-full h-screen overflow-hidden'>
      <div className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'> 

      <div className=' absolute flex gap-5  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-96 '>
          <div className=' flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className=' w-2/3 h-2/3 rounded-full bg-zinc-900'></div>
          </div>
          <div className=' flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
          <div className=' w-2/3 h-2/3 rounded-full bg-zinc-900'></div>
          </div>
         
      </div>
      
      </div>

      
    </div>
  )
}

export default Eyes