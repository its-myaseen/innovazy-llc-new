import React from 'react'
import ClientsWrapper from '../home/ClientsWrapper'
import { useTranslations } from 'next-intl'

const OurClients = () => {
  const t = useTranslations('home.clients')
  return (
    <div className='block relative box-border w-full mt-26 pb-16 max-w-full overflow-hidden'>
        {/* <h1 className='block relative text-center font-poppins text-4xl text-white'>
            Our Featured <b className="text-primary-orange"> Clients </b>
        </h1> */}

        <h1 className='flex flex-row justify-start sm:justify-center items-center gap-4 relative text-start sm:text-center font-poppins text-4xl text-white'>
           <span className='hidden sm:block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')}  <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
        </h1>
        <p className='block relative text-white/70 text-start sm:text-center max-w-[450px] mt-3 sm:mx-auto'>
            {t('sectionDesc')}
        </p>

        <ClientsWrapper/>
    </div>
  )
}

export default OurClients
