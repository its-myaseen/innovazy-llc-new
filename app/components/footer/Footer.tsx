import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer')

  return (
    <div className="block relative w-full box-border px-12 sm:px-16 pb-10 mt-24">
      <div className='flex flex-col sm:flex-row w-full box-border items-start justify-start gap-6'>
        <div className='flex-8 pr-24'>
          <h3 className='block relative font-figtree text-white font-light text-3xl'>{t('cta')}</h3>
          <button className='flex flex-row justify-center items-center gap-2 h-full px-4 py-2 mt-4 bg-white hover:bg-primary-orange hover:text-white duration-300 text-black text-sm font-semibold cursor-pointer font-poppins rounded-full'>
            {t('letsTalk')} <IoIosArrowForward />
          </button>
          <p className='block relative text-start text-[13px] text-white/40 mt-8'>{t('copyright')}</p>

        </div>
        <div className='flex-3'>
          <h4 className="font-poppins text-lg text-primary-orange font-medium">
            {t('quickLinks')}
          </h4>
          <Link href="/" className='block text-sm text-white/80 hover:text-primary-orange duration-300 mt-4'>
            {t('home')}
          </Link>
          <Link href="/" className='block text-sm text-white/80 hover:text-primary-orange duration-300 mt-2'>
            {t('aboutUs')}
          </Link>
          <Link href="/" className='block text-sm text-white/80 hover:text-primary-orange duration-300 mt-2'>
            {t('privacyPolicy')}
          </Link>
          <Link href="/" className='block text-sm text-white/80 hover:text-primary-orange duration-300 mt-2'>
            {t('termsAndConditions')}
          </Link>
        </div>
        <div className='flex-3'>
          <h4 className="font-poppins text-lg text-primary-orange font-medium">
            {t('connect')}
          </h4>
          <Link href="/" className='flex flex-row gap-2 text-sm text-white/80 hover:text-primary-orange duration-300 mt-4'>
            <FaWhatsapp className="text-lg text-white" />
            +966 535328007
          </Link>
          <Link href="/" className='flex flex-row gap-2 text-sm text-white/80 hover:text-primary-orange duration-300 mt-4'>
            <BsEnvelope className="text-lg text-white" />
            info@innovazy.com
          </Link>
          <Link href="/" className='flex flex-row gap-2 text-sm text-white/80 hover:text-primary-orange duration-300 mt-4'>
            <IoLocationOutline className="text-lg text-white" />
            {t('location')}
          </Link>

          <div className='flex flex-row gap-4 mt-4'>
            <Link href="/" className='box-border text-white/80 hover:text-primary-orange duration-300 mt-4'>
              <FaFacebookF className="text-xl " />
            </Link>
            <Link href="/" className='box-border text-white/80 hover:text-primary-orange duration-300 mt-4'>
              <FaLinkedinIn className="text-xl " />
            </Link>
            <Link href="/" className='box-border text-white/80 hover:text-primary-orange duration-300 mt-4'>
              <FaXTwitter className="text-xl" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer
