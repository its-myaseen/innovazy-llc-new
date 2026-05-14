import React from 'react'

const BenifitCard = ({data}:any) => {
  return (
    <div className='block relative p-6 pb-12 bg-white/3 border border-white/10  rounded-lg hover:scale-105 duration-300'>
      <div className='flex justify-center items-center h-16 w-16 bg-black border-white/10 border rounded-lg text-primary-orange  text-4xl'>
        {
            data.icon
        }
      </div>

      <h3 className='font-poppins text-white text-lg mt-6'>
        {data.heading}
      </h3>

      <p className='font-poppins text-sm text-white/60 mt-3'>
        {data.desc}
      </p>
    </div>
  )
}

export default BenifitCard
