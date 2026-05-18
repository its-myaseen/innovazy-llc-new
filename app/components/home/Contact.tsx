import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from 'next-intl';

const Contact = () => {
    const t = useTranslations('home.contact')

    return (
        <div className="flex flex-col sm:flex-row justify-start items-start gap-28 mt-16 pb-26 w-full">
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
            <div className="block relative w-full sm:flex-1 box-border space-y-6">
                <form className="block relative w-full box-border p-6 sm:p-12 bg-white/5 rounded-xl">
                <h2 className="block  relative  text-3xl text-primary-orange  font-poppins">{t('formHeading')}</h2>
                    <label className='block relative font-light text-[13px] ml-1 text-white/70 mt-10'>
                        {t('nameLbl')}
                    </label>;
                    <div className='block relative mt-1 box-border'>
                        <input type="text" placeholder={t('namePlh')} className='block relative pr-12 w-full px-4 text-md py-3 ring-0 outline-none text-white/80 bg-black border border-white/10 rounded-lg' />
                        <MdOutlinePersonOutline className="block absolute top-4 right-4 text-lg text-primary-orange " />
                    </div>

                    <label className='block relative font-light mt-4 text-[13px] ml-1 text-white/70'>
                        {t('emailLbl')}
                    </label>
                    <div className='block relative mt-1 box-border'>
                        <input type="email" placeholder={t('emailPlh')} className='block relative pr-12 w-full px-4 text-md py-3 ring-0 outline-none text-white/80 bg-black border border-white/10 rounded-lg' />
                        <AiOutlineMail className="block absolute top-4 right-4 text-lg text-primary-orange " />
                    </div>

                    <label className='block relative font-light mt-4 text-[13px] ml-1 text-white/70'>
                        {t('phoneLbl')}
                    </label>
                    <div className='block relative mt-1 box-border'>
                        <input type="tel" placeholder={t('phonePlh')} className='block relative pr-12 w-full px-4 text-md py-3 ring-0 outline-none text-white/80 bg-black border border-white/10 rounded-lg' />
                        <FiPhone className="block absolute top-4 right-4 text-lg text-primary-orange " />
                    </div>


                    <label className='block relative font-light mt-4 text-[13px] ml-1 text-white/70'>
                        {t('messageLbl')}
                    </label>
                    <div className='block relative mt-1 box-border'>
                        <textarea placeholder={t('messagePlh')} className='block resize-none relative pr-12 w-full px-4 text-md py-3 ring-0 outline-none text-white/80 min-h-[300px] bg-black border border-white/10 rounded-lg' />
                    </div>


                    <button type='submit' className='flex flex-row justify-center  py-3 w-full mt-6 items-center gap-2 h-full px-4 bg-white hover:bg-primary-orange hover:text-white duration-300 text-black text-sm font-semibold cursor-pointer font-poppins rounded-xl'>
                        {t('submit')} <IoIosArrowForward />
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Contact