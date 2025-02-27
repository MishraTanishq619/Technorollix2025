import React from 'react'

const ButtonLanding = ({label}:{label:string}) => {
  return (
    <div className='mt-10'>
        {/* <button className="bg-gradient-to-r from-[#ff2020] via-[#AA0406] to-[#8F0c11] flex items-center justify-center border-[3px] border-[#FFAE3D] rounded-full px-10 py-2 text-lg hover:scale-105 text-yellow-400 font-bold">
          {label}
        </button> */}
        <div className="w-[339px] h-[96px] rounded-full bg-transparent border-[2px] border-[#ffc362] flex justify-center items-center">
        <button className="w-[320px] h-[80px] bg-[#FF2020] p-auto rounded-full border-[3px] border-[#ffc362]">
          <span
            className="text-[#FFD188] text-4xl font-normal font-['Poppins'] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]"
          >
            {label}
          </span>{" "}
        </button>
      </div>
    </div>
  )
}

export default ButtonLanding