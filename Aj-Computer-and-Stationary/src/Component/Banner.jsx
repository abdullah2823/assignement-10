import React from 'react'
import bannerImage from '../assets/banner.jpeg'
import ManImg from '../assets/man.png'

export default function Banner() {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center text-white rounded-2xl"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>


      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-10 md:py-10 gap-6 md:gap-10 w-11/12 mx-auto">
        
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Welcome to Our <br /> 
            <span className="text-yellow-400">AJ Computer & Stationary</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Your one-stop shop for computers, accessories, and office supplies.
          </p>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={ManImg}
            alt="Illustration"
            className="w-3/4 sm:w-2/3 md:w-full max-w-[400px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
