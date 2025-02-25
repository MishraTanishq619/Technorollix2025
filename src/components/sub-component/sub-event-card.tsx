import React from 'react'

const SubEventCard = () => {
  return (
    <div className='w-96 h-auto bg-[#5D2019] border-4 border-#FBDA7A rounded-lg shadow-md flex flex-col justify-center'>
        <img src="./subEventLogo.svg" alt="subEvent" className='h-40'/>
        <div className="text-center text-[#ffad3c] text-3xl font-medium font-['Poppins'] uppercase tracking-[4.80px] [text-shadow:_0px_7px_10px_rgb(0_0_0_/_0.78)]">poster presentation</div>
        <div className=" text-justify text-white text-sm p-6 font-medium font-['Poppins'] ">Showcase your innovative ideas and research in TechVision, the ultimate technical poster presentation event. Present your findings, prototypes, and groundbreaking concepts in a visually compelling format. Impress judges and peers with your creativity, clarity, and technical expertise.</div>
    </div>
  )
}

export default SubEventCard