import React from 'react'

const QualitiesCard = ({data}) => {
  return (
    <div className="block relative p-4 pb-6 min-w-[285px] max-w-[500px] hover:scale-105 duration-300 flex-1 bg-white/5 border border-white/10 rounded-2xl">
        <p className='text-3xl sm:text-4xl text-primary-orange'>
            {data.icon}
        </p>

        <h4  className="font-poppins text-white text-md sm:text-lg leading-tight mt-4 max-w-[220px]">
            {data.label}
        </h4>
    </div>
  )
}

export default QualitiesCard
