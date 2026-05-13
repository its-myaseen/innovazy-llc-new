"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WhyOdoo = () => {
    const t = useTranslations('odoo');

    return (
        <div className={`block relative box-border pb-12 sm:pb-16 md:pb-20 mt-12 xs:mt-16 sm:mt-20 md:mt-28`}>
            <h2 className='block relative text-2xl xs:text-3xl sm:text-4xl max-w-[750px] mx-auto text-black font-semibold text-center leading-tight px-4 sm:px-0'>
                {t('o.sectionAfterTwo.mainHeading')}
            </h2>
            <p className='block relative text-sm xs:text-base sm:text-md text-center mx-auto text-black/80 max-w-[500px] leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionAfterTwo.desc')}
            </p>
            <Image height={1740} width={2848} src="/assets/images/odooPoints.webp" className='block relative w-full sm:-mt-16 md:-mt-[70px]' alt="Apps" />
        </div>
    )
}

export default WhyOdoo

