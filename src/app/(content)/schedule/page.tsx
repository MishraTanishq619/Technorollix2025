import React from 'react';
import Image from 'next/image';

const Schedule = () => (
  <Image 
    src="/finalschedule.svg" 
    width={500} 
    height={500} 
    alt="schedule" 
    className="w-full"
    priority
    loading="eager"
    layout="responsive"
  />
);

export default Schedule;
