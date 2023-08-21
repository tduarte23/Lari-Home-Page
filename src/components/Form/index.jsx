import React from 'react'

export default function Form() {
  return (
    <div className='p-9'>
        <div className='mb-16'> 
            <p className='text-primary text-lg font-medium'>Conte para a gente</p>
            <h1 className='text-primary text-3xl font-bold'>Qual seu Problema</h1>
        </div>
        <div>
            <form className=''>
                <div className='lg:flex lg:justify-between'>     
                    <div>
                        <label htmlFor="" className='absolute text-lg text-black font-semibold'>Primeiro Nome </label>
                        <input type="text" name="" id="" className=' text-lg pt-9 border-b-2 border-bgrey w-80 h-20 focus:outline-none' >
                    </input>
                    </div>
                    <div>
                        <label htmlFor="" className='absolute text-lg text-black font-semibold'>Sobrenome </label>
                        <input type="text" name="" id="" className='text-lg pt-9 border-b-2 border-bgrey w-80 h-20 focus:outline-none' >
                    </input>
                    </div>
                    <div>
                        <label htmlFor="" className='absolute text-lg text-black font-semibold'>Email </label>
                        <input type="text" name="" id="" className='text-lg pt-9 border-b-2 border-bgrey w-80 h-20 focus:outline-none' >
                    </input>
                    </div>
                </div>

                <div className='my-14'>
                    <label htmlFor="" className='absolute text-lg text-black font-semibold'>Telefone </label>
                    <input type="number" name="" id="" className='text-lg pt-9 border-b-2 border-bgrey w-full h-20 focus:outline-none' >
                        </input>
                </div>

                <div>
                <label htmlFor="" className='absolute text-lg text-black font-semibold '>Messagem </label>
                <textarea name="" id="" cols="50" rows="8" className='bg-slate-400 text-xl leading-8 w-full border-b-4 pt-6  focus:outline-none'></textarea>
                </div>

            </form>
        </div>
    </div>
  )
}
