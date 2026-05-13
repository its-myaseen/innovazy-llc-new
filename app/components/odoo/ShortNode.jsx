"use client"
import React from 'react'
import { useTranslations } from 'next-intl';

const ShortNode = () => {
    const t = useTranslations('odoo');

    return (
        <div className={`block relative box-border pb-12 sm:pb-16 md:pb-20 mt-12 xs:mt-16 sm:mt-20 md:mt-24`}>
            <h2 className='block relative text-xl xs:text-2xl sm:text-3xl font-semibold text-center mx-auto max-w-[950px] text-secondary-odoo leading-tight mt-2 xs:mt-3 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionTwo.mainHeading')}
            </h2>
            <b className='block relative text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-center mx-auto max-w-[800px] text-black/80 leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionTwo.headingOne')}
            </b>
            <p className='block relative text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-center mx-auto max-w-[800px] text-black/80 leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionTwo.lineOne')}
            </p>
            <b className='block relative text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-center mx-auto max-w-[800px] text-black/80 leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionTwo.headingTwo')}
            </b>
            <p className='block relative text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-center mx-auto max-w-[1050px] text-black/80 leading-tight mt-2 xs:mt-3 sm:mt-2 px-4 sm:px-0'>
                {t('o.sectionTwo.lineTwo')}
            </p>

        </div>
    )
}

export default ShortNode
