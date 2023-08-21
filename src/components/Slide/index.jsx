import React from 'react'

export default function Slide() {
  return (
    <div className="flex">
        <div className='p-5 bg-primary w-1/2'>
            <h1 className='text-6xl text-white'>Especialista no <br/> Sistema Bancário</h1>
            <p className='text-base font-normal text-white mt-10'>Nosso escritório é especializado em prestar assessoria jurídica
            aos funcionários de bancos públicos e privados (CAIXA, BANCO DO BRASIL, ITAÚ,
            SANTANDER, etc), especialmente na defesa dos seus interesses
            quanto ao correto recebimento de sua remuneração, gratificações e incorporações,
            como também em relação a prevenção e reparação
            de danos decorrentes de assédio moral e doenças ocupacionais. </p>
        </div>
        <div className='p-5 w-1/2'>
            <h1 className='text-6xl'>Direito <br /> Trabalhista</h1>
            <p className='text-base font-normal  mt-10'>De forma séria e combativa atuamos na
             defesa dos direitos e prerrogativas dos funcionários de bancos públicos e privados,
             funcionários de instituições da área de saúde e limpeza urbana e  transportes públicos,
             visando garantir o correto recebimento de sua remuneração, gratificações e incorporações,
             adicionais de insalubridade e periculosidade, entre outros previstos na legislação geral
              e especial de cada categoria, como também em relação
             a prevenção e reparação de danos decorrentes de assédio moral e doenças ocupacionais.</p>
        </div>
    </div>
  )
}
