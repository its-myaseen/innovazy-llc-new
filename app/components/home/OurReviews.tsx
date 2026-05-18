import React from 'react'
import TestimonialsSwiper from './TestimonialsSwiper'
import TestimonialWrapper from './TestimonialWrapper'
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from 'next-intl';
import Link from 'next/link';


const OurReviews = () => {
    const t = useTranslations('home.reviews')
    return (
        <div className='block relative box-border w-full mt-16 pb-46 '>
            <h2 className='flex flex-row justify-start sm:justify-center items-center gap-4 relative text-start sm:text-center font-poppins text-4xl text-white'>
                <span className='hidden sm:block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')} <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h2>
            <p className='block relative text-white/70 text-start sm:text-center max-w-[450px] mt-3 sm:mx-auto'>
                {t('sectionDesc')}
            </p>
            <TestimonialWrapper />
            <Link href="/testimonials">
                <button className='flex flex-row justify-center items-center relative gap-2 h-full px-4 py-3 sm:mx-auto top-10 bg-white hover:bg-primary-orange hover:text-white duration-300 text-black text-sm font-semibold cursor-pointer font-poppins rounded-full'>
                    {t('viewAll')} <IoIosArrowForward />
                </button>
            </Link>

        </div>
    )
}

export default OurReviews
