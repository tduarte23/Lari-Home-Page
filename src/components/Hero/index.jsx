import React from 'react'
import teste from '../../Assets/hero.jpeg'

export default function Hero() {
  return (
    <div className='bg-cyan-200 '>
      <h1 className=' text-2xl mt-24 lg:text-4xl  lg:top-40 ml-6 text-bgrey absolute lg:text-8xl lg:top-56 lg:right-6 font-bold z-10 '>Soluções Jurídicas <br/> sob medida. </h1>
      <img src={teste} alt="" className='object-cover w-screen lg:w-full h-104 lg:h-116 filter: brightness-75' />
    </div>
  )
}
