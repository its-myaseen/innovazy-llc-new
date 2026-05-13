"use client";
import { useTranslations, useLocale } from 'next-intl';
import React from 'react'
import { industriesData } from '@/utils/industries.utils';
import IndustriesSpotlight from './IndustriesSpotlight';
import Link from 'next/link';


const OurIndustriees = () => {
    const t = useTranslations("industries")
    const commonT = useTranslations("common")
    const whyChooseUsData = industriesData(t)


    return (
        <>
            <div  id="explore" className={`block  px-16  mt-[150px]`}>
                
                <h1 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                    <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> {t("sectionTwo.mainHeading")}  <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
                </h1>
                <p className='block relative text-white/70 text-center max-w-[750px] mt-3 mx-auto'>
                    {t("sectionTwo.desc")}
                </p>

                <IndustriesSpotlight data={whyChooseUsData} />
                <div className='text-center mt-16'>
                    <Link href='/services'>
                        {/* <PrimaryButton btnText={commonT("buttons.exploreServices")} image={`/assets/icons${isDark ? '' : '/dark'}/forwardArrow.png`} imageAlt="Explore Services" /> */}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default OurIndustriees