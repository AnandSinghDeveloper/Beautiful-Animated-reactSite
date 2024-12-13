import React from 'react'

const Featured = () => {
  return (
    <div className=' w-full py-20 bg-[#f1f1f1] rounded-br-3xl rounded-bl-3xl'>
      <div className=' w-full px-20 border-b-[1px] border-zinc-200 pb-20  '>
        <h1 className=' text-6xl tracking-tight '> Featured projects </h1>
      </div>
      <div className=' px-20 '>
         
        <div className=' cards w-full flex gap-10 mt-10 b '>
          <div className=' container relative w-1/2 h-[75vh] '>
          <h1 className=' absolute text-8xl flex overflow-hidden  leading-none tracking-tighter left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 text-[#a1b562] font-semibold'>\
           {"FYDE".split('').map((item,index)=><span className=' inline-block
           '>{item}</span>)}
           </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden '>
              <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>

          <div className=' container relative w-1/2 h-[75vh]  '>
          <h1 className=' absolute text-8xl  leading-none tracking-tighter right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-10 text-[#a1b562] font-semibold'>
          {"VISE".split('').map((item,index)=><span>{item}</span>)}
          </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
