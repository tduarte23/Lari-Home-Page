import React from 'react'
import Time1 from '../../Assets/Time1.jpg'
import Time2 from '../../Assets/Time2.jpg'
import Time3 from '../../Assets/Time3.png'

export default function NossoTime(){
        return(
            <div>
            <div id='bgrad' className='h-full mt-8 '>
                <div className='flex'>
                    <h1 className='pb-5 ml-2 mt-12 text-2xl bg-gra'>________</h1>
                    <h1 className='text-primary font-bold text-3xl ml-2 mt-14 mb-12'>Nosso Time</h1>
                </div>
                <div className='p-20 flex flex-col lg:flex-row gap-12'>
                    <div className='w-72 h-80 bg-white lg:w-109 lg:h-112'>
                        <div className=''>
                            <img src={Time1} alt="" />
                        </div>
                        <div className='flex justify-center flex-col'>
                            <h2 className='text-2xl font-bold m-auto'>Larissa Vidal</h2>
                            <p className='font-semibold m-auto'>Advogada</p>
                        </div>
                    </div>
                    <div className='w-72 h-80 bg-white lg:w-104 lg:h-109'>
                        <div className=''>
                            <img src={Time2} className='object-cover  w-full h-60 lg:h-96' alt="Advogado" />
                        </div>
                        <div className='flex justify-center flex-col'>
                            <h2 className='text-2xl font-bold m-auto'>Larissa Vidal</h2>
                            <p className='font-semibold m-auto'>Advogada</p>
                        </div>
                    </div>
                    <div className='w-72 h-80 bg-white lg:w-104 lg:h-109'>
                        <div className=''>
                            <img src={Time3} className='object-cover  w-full lg:h-96' alt="" />
                        </div>
                        <div className='flex justify-center flex-col'>
                            <h2 className='text-2xl font-bold m-auto'>Larissa Vidal</h2>
                            <p className='font-semibold m-auto'>Advogada</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
}