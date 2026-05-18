import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';

const CTA = () => {
    const t = useTranslations('home.cta')
    return (
        <div className='flex py-24 relative w-full flex-col sm:justify-center justify-start sm:items-center gap-6 mb-42 box-border p-8 overflow-hidden'>
            <img src="/assets/images/lobby1.jpg" alt='Ui Image' className="block absolute h-full w-full object-cover" />
            <div className='block absolute inset-0 bg-black/50 h-full w-full'></div>
            <h2 className='block  px-8 relative text-4xl sm:text-5xl font-semibold max-w-[550px] text-white font-poppins text-start sm:text-center'>{t('heading')}</h2>
            <p className='block px-8 relative  text-md sm:text-lg max-w-[580px] text-white/70 leading-tight text-start sm:text-center'>{t('description')}</p>

            <a href="tel:+966 535328007" className='px-8'>
                <button className="flex items-center relative gap-2 py-3 px-8 bg-primary-orange text-white text-md font-semibold cursor-pointer font-poppins rounded-full transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                    +966 535328007
                    <IoCallOutline />
                </button>
            </a>
        </div>
    )
}

export default CTA
