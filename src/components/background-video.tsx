import React from 'react'

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://media.istockphoto.com/id/1292755203/video/blur-footage-of-music-festival-at-night-club-in-slow-motion.mp4?s=mp4-640x640-is&k=20&c=FgIlAAQF0E20Z8UNV_qW64kuoG6hes4FdR75G-7Jjig=" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      
    </div>
  );
}

export default BackgroundVideo