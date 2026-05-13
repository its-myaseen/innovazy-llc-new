import React from 'react'
import { useTranslations } from 'next-intl'
import { BsClockHistory } from "react-icons/bs"
import { IoCallOutline, IoMailOutline } from "react-icons/io5"
import { SlLocationPin } from "react-icons/sl"
import dynamic from 'next/dynamic'

const Booking = dynamic(() => import('./Booking'))

const Appointment = () => {
  const tA = useTranslations('appointment')
  return (
    <section className='block relative box-border w-full mt-[160px]   pb-26'>
      <div className='block absolute h-[700px] w-[700px] bg-primary-orange/15 blur-[170px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='flex flex-col lg:flex-row justify-between items-start relative box-border h-full w-full mx-auto max-w-[1250px] mb-8 md:mb-16 gap-10 lg:gap-0'>
        <div className='block relative box-border flex-1 w-full lg:pr-16'>
          <div className='block sticky top-28 box-border'>
            <div className='flex flex-row justify-start items-center gap-2 mt-8'>
              <p className='text-sm font-poppins text-primary-orange'>{tA('badge')}</p>
              <span className="block relative h-[2px] w-[60px] bg-primary-orange"></span>
            </div>
            <h2 className='block relative text-5xl font-figtree text-white mt-4'>
              {tA('formHeading1')} <br />
              {tA('formHeading2')}
            </h2>
            <p className="block text-md text-white/70 max-w-[400px] font-poppins mt-6">
             {tA('formDesc')}
            </p>
          </div>

        </div>

        <div className='flex justify-center items-center relative rounded-xl box-border w-full lg:w-[750px] overflow-hidden mt-8 lg:mt-0'>
          <div className='block relative w-full'>
            <Booking />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Appointment
