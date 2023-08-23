import React from 'react'
import Map from '../../Assets/Frame.png'

export default function HeroMap() {
  return (
    <div className='  bg-bgrey lg:flex lg:h-50'>
        <div className='w-2/3'>
          <div className='lg:flex '>
            <h1 className='hidden pb-5 ml-2 mt-20 text-2xl'>________</h1>
          <div className='p-4'>
            <h1 className='text-primary font-bold text-3xl ml-2 mt-14 mb-12'> Estamos em todo o Brasil</h1>

            <p className=''>Desde o primeiro atendimento do cliente, através de agendamento da consulta
                 on line, ao ajuizamento das demandas judiciais e participação em audiências
                 e julgamentos virtuais, com a mesma seriedade e profissionalismo adotado na
                 forma presencial. Dispomos dos mais atuais canais de atendimento digital para
                 realização de consultas, remessa e conferência de documentos e contratos, sempre observando
                 a confidencialidade e segurança necessária ao manuseio e armazenamento dessas informações. 
            </p>
            <button className='p-3 border border-primary ml-3 my-6 transition-colors duration-300 ease-in-out hover:bg-bgold'>FALE CONOSCO</button>
            </div>
          </div>
        </div>
        <div className='bg-primary p-4 lg:w-1/3 flex align-center'>
            <img src={Map} alt="" className='lg:w-98' />
        </div>
    </div>
  )
}
