import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="">
      <Image src={"/gallery.svg"} width={500} height={500} alt='schedule' className='w-full'/>
    </div>
  )
}

export default page