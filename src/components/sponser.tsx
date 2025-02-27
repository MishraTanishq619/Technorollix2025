import React from 'react'

const Sponser = () => {
  return (
    <div className='text-white flex flex-col text-center items-center my-28 h-auto px-4 md:px-0'>
        <h2 className='text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]'>SPONSERS</h2>
        <div className='flex gap-10 flex-wrap justify-center items-center'> 
        <img src="./jindal-logo.png" alt="" className="w-full max-w-[350px] h-auto mt-10" />
        </div>
    </div>
  )
}

export default Sponser