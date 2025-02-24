import React from 'react'

const ButtonLanding = ({label}:{label:string}) => {
  return (
    <div className='mt-16'>
        <button className="bg-gradient-to-r from-[#ff2020] via-[#AA0406] to-[#8F0c11] flex items-center justify-center border-[3px] border-[#FFAE3D] rounded-full px-10 py-2 text-lg hover:scale-105 text-yellow-400 font-bold">
          {label}
        </button>
    </div>
  )
}

export default ButtonLanding