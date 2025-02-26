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
        <source src="./background.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(70,24,21,0.90)]"></div>
    </div>
  );
}

export default BackgroundVideo