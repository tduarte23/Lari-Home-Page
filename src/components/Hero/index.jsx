import React from 'react'
import teste from '../../Assets/hero.jpeg'

export default function Hero() {
  return (
    <div className='bg-cyan-200 '>
      <h1 className=' text-lg top-2/4 lg:text-4xl text-red-200 lg:top-40 ml-4 lg:text-bgrey absolute lg:text-8xl lg:top-56 lg:right-6 font-bold z-10 '>Soluções Jurídicas <br/> sob medida. </h1>
      <img src={teste} alt="" className='object-cover w-screen lg:w-full h-116 filter: brightness-75' />
    </div>
  )
}
