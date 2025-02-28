import ButtonLanding from '@/components/sub-component/button-landing'
import React from 'react'

const Ambiation = () => {
  return (

    <div className=''>
      <div className='h-[675vh]'></div>
      <div className="absolute top-0 left-0 w-full h-auto pointer-events-none -z-10" id="bg-container">
      <img
        src="/aimbiationbg.svg"
        className="w-full h-auto opacity-100"
        alt="Scrolling Background"
      />.
    </div>

    <div className='absolute top-[80vh] left-[80vh]'>
    <ButtonLanding label='Register' link='/dashboard' />
    </div>
    <div className='absolute top-[275vh] left-[85vh]'>
    <ButtonLanding label='Explore' link='/events' />
    </div>
    <div className='absolute top-[440vh] left-[80vh]'>
    <ButtonLanding label='Know More' link='/about' />
    </div>
    </div>
    
  )
}

export default Ambiation