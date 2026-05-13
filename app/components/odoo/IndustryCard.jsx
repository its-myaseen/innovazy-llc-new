import React from 'react'

const IndustryCard = ({ content }) => {
    return (
        <div className='block relative h-[300px] xs:h-[320px] sm:h-[350px] p-4 xs:p-5 w-full max-w-[300px] mx-auto rounded-lg bg-secondary-odoo overflow-hidden'>
            <img src={content.image} alt={`${content.heading}`} className='block absolute top-0 left-0 w-full h-full object-cover' />
            <h3 className='block relative text-xl text-white dark:text-white xs:text-2xl font-medium tracking-tight z-10'>{content.heading}</h3>
            <p className='block relative text-xs xs:text-[12px] sm:text-[13px] text-left mx-auto text-white/80 max-w-[500px] leading-tight mt-3 xs:mt-4 z-10'>{content.description}</p>
            <span className='block absolute bottom-4 xs:bottom-5 left-4 xs:left-5 text-[11px] xs:text-[12px] text-black bg-white px-[8px] xs:px-[9px] py-[2px] xs:py-[3px] leading-tight rounded-full z-10'>{content.highlight}</span>
        </div>
    )
}

export default IndustryCard
