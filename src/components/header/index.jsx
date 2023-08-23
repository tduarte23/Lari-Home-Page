import Logo from '../../Assets/Logo.png'
import React from 'react'

export default function Header() {
  return (
      <header className='lg:flex items-center bg-primary justify-between p-3'>
         <a href="/"> <img src={Logo} alt="Logo" className=' hidden w-32 h-5 ml-3 lg:w-72 lg:h-10 lg:ml-24' /></a>
        <div className='text-sm text-white lg:mr-24 '>
          <a href="/" className='lg:mx-4'>Inicio</a>
          <a href="/" className='mx-4'>Atuação</a>
          <a href="/">Contato</a>
        </div>
      </header>
  )
}
