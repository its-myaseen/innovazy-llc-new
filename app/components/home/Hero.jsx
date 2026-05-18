import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Hero = () => {
    const t = useTranslations('home.hero')

    return (
        <div className="flex justify-start sm:justify-center items-center relative w-full box-border min-h-screen bg-black max-w-full">
            <div className='block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 blur-[280px] w-[45vw] h-[45vw] bg-primary-orange rounded-full'></div>
            <div className='flex flex-col justify-center mt-32 md:mt-18 items-start sm:items-center relative w-full'>
                <div className='flex flex-row sm:justify-center items-center gap-2 fade-in text-white border border-white/10 bg-white/5 py-1 px-3 text-[14px] rounded-full'>
                    <BsStars className='text-[18px]' /> {t('badge')}
                </div>
                <h1 className='block relative text-[50px] sm:text-[60px] leading-tight tracking-tight font-medium w-full sm:w-[90%]  md:w-[75%] mt-6 text-start sm:text-center text-white/90 font-figtree'>{t('heading')}</h1>
                <p className='block relative font-poppins text-md text-white/70 mt-4 w-[85%] md:w-[45%] text-shadow-transparent sm:text-center'>{t('description')}</p>
                <Link href='/book-appointment' className="flex flex-row justify-center items-center mt-10 gap-2 py-3 px-8 bg-primary-orange text-white text-md font-semibold cursor-pointer font-poppins rounded-full transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                    {t('cta')} <IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default Hero
