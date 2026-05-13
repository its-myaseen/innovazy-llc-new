'use client'
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import NavShadow from "@/app/components/Navbar/NavShadow"
import LocaleSwitcher from '../LocaleSwitcher';
import { useTranslations } from 'next-intl';

const Navbar = () => {
    const params = useParams()
    const t = useTranslations('navbar')

    return (
        <>
            <div dir={params.locale == 'ar' ? "ltr" : "ltr"} className='flex fixed top-6 left-0 flex-row justify-center items-center w-full box-border gap-6 z-[9999]'>
                <div className='flex flex-row justify-between items-center gap-12 w-max box-border h-[60px] p-2 rounded-full border border-white/10 shadow-lg shadow-black/20 bg-black '>
                    <img src="/assets/logo/Innovazy_ar.png" alt="Innovazy Logo" className='block relative h-[22px] ms-2' />

                    <div className='flex flex-row justify-center items-center  relative gap-6 h-full'>
                        <Link href="/" className='block relative font-poppins text-sm text-white/60 hover:text-primary-orange duration-300'>
                            {t('home')}
                        </Link>
                        <Link href="/about-us" className='block relative font-poppins text-sm text-white/60 hover:text-primary-orange duration-300'>
                            {t('aboutUs')}
                        </Link>
                        <Link href="/odoo" className='block relative font-poppins text-sm text-white/60 hover:text-primary-orange duration-300'>
                            {t('odoo')}
                        </Link>
                        <Link href="/zatca-e-invoicing" className='block relative font-poppins text-sm text-white/60 hover:text-primary-orange duration-300'>
                            {t('zatca')}
                        </Link>
                        <button className='flex group flex-row justify-center items-center gap-2 cursor-pointer relative hover:h-[170%] font-poppins text-sm text-white/60 h-full hover:text-primary-orange duration-300'>
                            {t('resources')} <IoIosArrowDown className="text-sm group-hover:rotate-[180deg] duration-300" />
                            <div className='opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-300 absolute top-full left-1/2 py-2 w-[200px] -translate-x-1/2  shadow-lg rounded-xl bg-black/80 backdrop-blur-sm border border-white/10 overflow-hidden'>
                                <Link href="/industries" className='block relative w-full px-4 py-2 bg-transparent hover:bg-primary-orange/70 text-start text-white/60 hover:text-white'>
                                    {t('industries')}
                                </Link>
                                <Link href="/careers" className='block relative w-full px-4 py-2 bg-transparent hover:bg-primary-orange/70 text-start text-white/60 hover:text-white'>
                                    {t('careers')}
                                </Link>
                                <Link href="/testimonials" className='block relative w-full px-4 py-2 bg-transparent hover:bg-primary-orange/70 text-start text-white/60 hover:text-white'>
                                    {t('testimonials')}
                                </Link>
                                <Link href="/blogs" className='block relative w-full px-4 py-2 bg-transparent hover:bg-primary-orange/70 text-start text-white/60 hover:text-white'>
                                    {t('blogs')}
                                </Link>
                            </div>

                        </button>
                    </div>

                        <Link href="/book-appointment" className='flex flex-row justify-center items-center gap-2 h-full px-4 bg-white hover:bg-primary-orange hover:text-white duration-300 text-black text-sm font-semibold cursor-pointer font-poppins rounded-full'>
                            {t('getConsultation')} <IoIosArrowForward />
                        </Link>
                </div >
                <LocaleSwitcher />
            </div>
            <NavShadow />
        </>
    )
}

export default Navbar
