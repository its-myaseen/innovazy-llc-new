"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const OdooApps = () => {
    const t = useTranslations('odoo');

    return (
        <div className={`block relative box-border pb-12 sm:pb-16 md:pb-20`}>
            <h2 className='block relative text-2xl xs:text-3xl sm:text-4xl max-w-[600px] mx-auto text-black font-semibold text-center leading-tight px-4 sm:px-0'>
                {t('o.sectionOne.mainHeading')}
            </h2>
            <p className='block relative text-sm xs:text-base sm:text-md text-center mx-auto text-black/80 max-w-[500px] leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionOne.desc')}
            </p>
            <Image height={744} width={1245} src="/assets/images/odooApps.webp" className='block relative w-full mt-12 xs:mt-16 sm:mt-20 md:mt-24' alt="Odoo Apps Used by Innovazy LLC" />
        </div>
    )
}

export default OdooApps
