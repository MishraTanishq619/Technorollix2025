import React from 'react'

function Junoon() {
  return (
    <div className='h-screen w-full flex justify-center items-center text-white'>
      <div className="absolute top-0 left-0 w-full h-auto pointer-events-none -z-10" id="bg-container">
      <img
        src="/junoon.jpg"
        className="w-full h-auto opacity-100"
        alt="Scrolling Background"
      />.
      </div>
    </div>
  )
}

export default Junoon