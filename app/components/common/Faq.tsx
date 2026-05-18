'use client'

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useTranslations } from 'next-intl';

const Faq = () => {

    const params = useParams();
    const t = useTranslations('faq');

    const [openIndex, setOpenIndex] = useState(null);

    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return (
        <div className="flex flex-col sm:flex-row justify-start items-start gap-28 mt-16 pb-26">

            {/* Left Side */}
            <div className='block sticky top-28 box-border'>

                <div className='flex flex-row justify-start items-center gap-2'>
                    <p className='text-sm font-poppins text-primary-orange'>
                        {t('badge')}
                    </p>

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

            {/* FAQ Right Side */}
            <div className="block relative flex-1 box-border space-y-6 w-full">

                {
                    keys.map((key, index) => {

                        const isOpen = openIndex === index;

                        return (

                            <div
                                key={key}
                                dir={params.locale == "ar" ? 'rtl' : 'ltr'}
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                className={`block relative cursor-pointer p-4 w-full bg-white/5 border border-white/10 rounded-xl transition-all duration-300 ${params.locale == 'ar'
                                        ? 'pl-18'
                                        : 'pr-18'
                                    }`}
                            >

                                {/* Question */}
                                <h6 className="block relative text-lg text-white/90 font-semibold">
                                    {t(`questions.${key}.q`)}
                                </h6>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                                            ? 'max-h-40 opacity-100 mt-4'
                                            : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className='text-sm text-white/60'>
                                        {t(`questions.${key}.a`)}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <IoIosArrowDropdown
                                    className={`block absolute top-5 text-primary-orange text-2xl duration-300 ${params.locale == 'ar'
                                            ? 'left-5'
                                            : 'right-5'
                                        } ${isOpen ? 'rotate-180' : ''
                                        }`}
                                />

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Faq;