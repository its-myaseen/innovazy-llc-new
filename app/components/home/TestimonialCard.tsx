import React from 'react'

const TestimonialCard = ({ data, toggleModal }:any) => {
  return (
    <div onClick={()=>toggleModal(data)} className="block relative w-full box-border p-4 bg-black hover:bg-transparent cursor-pointer rounded-xl border border-white/10 flex-1 max-w-[300px] md:min-w-auto min-w-[300px]">

      <div className='flex flex-row w-full justify-start items-center gap-4'>
        <div className='flex justify-center items-center relative h-10 w-10 bg-primary-orange rounded-full font-poppins text-md uppercase text-white font-semibold'>
          {
            data.name.slice(0, 2)
          }
          {/* {
            data.category
          } */}
        </div>
        <h4 className='block relative text-sm text-white font-poppins flex-1 font-semibold'>
          {data.name}
        </h4>
      </div>
      <p className='relative font-poppins text-[13px] text-white/60 mt-6 line-clamp-6'>
        {data.message}
      </p>
    </div>
  )
}

export default TestimonialCard
