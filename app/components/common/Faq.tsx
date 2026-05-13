'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useTranslations } from 'next-intl';

const Faq = () => {
    const params = useParams()
    const t = useTranslations('faq')

    // Since we can't map directly over a translation object that is an array in next-intl
    // easily without knowing the length, we'll fetch the array. 
    // In next-intl, to get an array of objects, we map through the keys.
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return (
        <div className="flex flex-col sm:flex-row justify-start items-start gap-28 mt-16 pb-26">
            <div className='block sticky top-28 box-border'>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <p className='text-sm font-poppins text-primary-orange'>{t('badge')}</p>
                    <span className="block relative h-[2px] w-[60px] bg-primary-orange"></span>
                </div>
                <h2 className='block relative text-5xl font-figtree text-white mt-4'>
                    {t('heading1')} <br />
                    {t('heading2')}
                </h2>
                <p className="block text-md text-white/70 max-w-[400px] font-poppins mt-6">
                    {t('description')}
                </p>
            </div>
            <div className="block relative flex-1 box-border space-y-6">
                {
                    keys.map((key) => {
                        return (

                            <div dir={params.locale == "ar" ? 'ltr':'ltr'} key={key} className={`block group relative cursor-pointer p-4 w-full bg-white/5 border-white/10 rounded-xl ${params.locale == 'ar'? 'pl-18' : 'pr-18'}`}>
                                <h6 className="block relative text-lg text-white/90 font-semibold">{t(`questions.${key}.q`)}</h6>
                                <div className='max-h-0 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500'>
                                    <p className='mt-4 text-sm text-white/60'>{t(`questions.${key}.a`)}</p>
                                </div>

                                <IoIosArrowDropdown className={`block absolute top-5 right-5 text-primary-orange text-2xl group-hover:rotate-[180deg] duration-300`}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Faq
