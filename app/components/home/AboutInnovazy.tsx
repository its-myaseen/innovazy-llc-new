import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import QualitiesCard from './QualitiesCard';
import { useTranslations } from 'next-intl';
import {
    FiCode,
    FiZap,
    FiUsers,
    FiActivity,
    FiShield,
    FiHeadphones,
    FiMessageCircle,
    FiTrendingUp,
} from "react-icons/fi";

const AboutInnovazy = () => {
    const t = useTranslations('home.about')

    const points = [
        { label: t('p1'), icon: <FiCode /> },
        { label: t('p2'), icon: <FiZap /> },
        { label: t('p3'), icon: <FiUsers /> },
        { label: t('p4'), icon: <FiActivity /> },
        { label: t('p5'), icon: <FiShield /> },
        { label: t('p6'), icon: <FiHeadphones /> },
        { label: t('p7'), icon: <FiMessageCircle /> },
        { label: t('p8'), icon: <FiTrendingUp /> },
    ];
    return (
        <div className='block relative box-border w-full mt-16 pb-26'>
            <h2 className='flex flex-row   justify-start sm:justify-center items-center gap-4 relative text-start sm:text-center font-poppins text-4xl text-white'>
                <span className='hidden sm:block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')} <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h2>
            <p className='block relative text-white/70 text-start sm:text-center max-w-[450px] mt-3 sm:mx-auto'>
                {t('sectionDesc')}
            </p>

            <div className='block relative w-full box-border'>
                <div className='block absolute top-1/2 left-1/2 -translate-x-1/2 z-[10] -translate-y-1/2 bg-primary-orange/15 h-[70%] w-[80%] blur-3xl rounded-full'></div>

                <div className="flex sm:flex-row flex-col w-full relative gap-8 p-4 mt-16 z-[1000] bg-white/5 border border-white/10 rounded-2xl z-10">

                    <div className="flex-1 flex items-start justify-start overflow-hidden rounded-lg">
                        <img
                            src="/assets/images/erp_puzzle.png"
                            alt="About Innovazy"
                            className="w-full max-h-[420px] object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-start flex-2 py-8">
                        <h3 className='block relative text-4xl font-poppins text-white/80'>{t('heading')}</h3>
                        <p className='block relative text-md text-white/70 mt-6'>
                            {t('description')}
                        </p>

                        <Link href='/about-us' className='flex flex-row justify-center items-center gap-2 py-2 mt-4 px-4 bg-white hover:bg-primary-orange hover:text-white duration-300 text-black text-sm font-semibold cursor-pointer font-poppins rounded-full'>
                            {t('learnMore')} <IoIosArrowForward />
                        </Link>
                    </div>

                </div>

                <div className='flex flex-wrap relative gap-6 w-full box-border mt-8 z-10'>
                    {
                        points.map((data, ind) => {
                            return (
                                <QualitiesCard data={data} key={ind} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default AboutInnovazy
