import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WhyInnovazyForOdoo = () => {
    const t = useTranslations('odoo');

    return (
        <div className={`block relative box-border pb-12 sm:pb-16 md:pb-20`}>
            <h2 className='block relative text-2xl xs:text-3xl sm:text-4xl max-w-[600px] mx-auto text-black font-semibold text-center leading-tight px-4 sm:px-0'>
                {t('o.sectionThree.mainHeading')}
            </h2>
            <p className='block relative text-sm xs:text-base sm:text-md text-center mx-auto text-black/80 max-w-[500px] leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t('o.sectionThree.desc')}
            </p>
            <div className='block relative box-border w-full mt-12 xs:mt-16 sm:mt-20 max-w-[1300px] px-4 sm:px-0'>
                <div className='flex flex-col sm:flex-row justify-center items-stretch w-full gap-4 sm:gap-5'>
                    <div className='flex-1 p-3 xs:p-4 pb-10 xs:pb-12 sm:pb-14 rounded-xl sm:rounded-2xl bg-white shadow-lg flex flex-col'>
                        <Image alt='odoo image' height={2670} width={6254} src="/assets/images/ComprehensiveExpertise.webp" className='w-full h-[150px] xs:h-[180px] sm:h-[200px] rounded-lg object-cover' />
                        <h2 className='text-lg xs:text-xl sm:text-[22px] text-black font-medium mt-4 xs:mt-5 sm:mt-6 leading-tight'>
                            {t('o.sectionThree.cardOne.title')}
                        </h2>
                        <p className='text-sm xs:text-[14px] sm:text-[15px] text-black/80 mt-2 leading-tight'>
                            {t('o.sectionThree.cardOne.desc')}
                        </p>
                    </div>

                    <div className='flex-1 p-3 xs:p-4 pb-10 xs:pb-12 sm:pb-14 rounded-xl sm:rounded-2xl bg-white shadow-lg flex flex-col'>
                        <Image alt='odoo image' height={2670} width={6254} src="/assets/images/TailoredSolutions.webp" className='w-full h-[150px] xs:h-[180px] sm:h-[200px] rounded-lg object-cover' />
                        <h2 className='text-lg xs:text-xl sm:text-[22px] text-black font-medium mt-4 xs:mt-5 sm:mt-6 leading-tight'>
                            {t('o.sectionThree.cardTwo.title')}
                        </h2>
                        <p className='text-sm xs:text-[14px] sm:text-[15px] text-black/80 mt-2 leading-tight'>
                            {t('o.sectionThree.cardTwo.desc')}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-center items-stretch w-full gap-4 sm:gap-5 mt-6 xs:mt-8 sm:mt-10'>
                    <div className='flex-1 p-3 xs:p-4 pb-10 xs:pb-12 sm:pb-14 rounded-xl sm:rounded-2xl bg-white shadow-lg flex flex-col'>
                        <Image alt='odoo image' height={2670} width={6254} src="/assets/images/SeamlessIntegration.webp" className='w-full h-[150px] xs:h-[180px] sm:h-[200px] rounded-lg object-cover' />
                        <h2 className='text-lg xs:text-xl sm:text-[22px] text-black font-medium mt-4 xs:mt-5 sm:mt-6 leading-tight'>
                            {t('o.sectionThree.cardThree.title')}
                        </h2>
                        <p className='text-sm xs:text-[14px] sm:text-[15px] text-black/80 mt-2 leading-tight'>
                            {t('o.sectionThree.cardThree.desc')}
                        </p>
                    </div>

                    <div className='flex-1 p-3 xs:p-4 pb-10 xs:pb-12 sm:pb-14 rounded-xl sm:rounded-2xl bg-white shadow-lg flex flex-col'>
                        <Image alt='odoo image' height={2670} width={6254} src="/assets/images/ScalableGrowth.webp" className='w-full h-[150px] xs:h-[180px] sm:h-[200px] rounded-lg object-cover' />
                        <h2 className='text-lg xs:text-xl sm:text-[22px] text-black font-medium mt-4 xs:mt-5 sm:mt-6 leading-tight'>
                            {t('o.sectionThree.cardFour.title')}
                        </h2>
                        <p className='text-sm xs:text-[14px] sm:text-[15px] text-black/80 mt-2 leading-tight'>
                            {t('o.sectionThree.cardFour.desc')}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyInnovazyForOdoo
