import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { useTranslations } from 'next-intl';
import { PiArrowCircleDownThin } from "react-icons/pi";
import Link from 'next/link';

const Hero = ({ locale, set }:any) => {
    const t = useTranslations(locale)
    const tCommon2 = useTranslations('common2')

    return (
        <div className="flex justify-center items-center relative w-full min-h-screen bg-black">

            {/* Background Glow */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 blur-[280px] w-[45vw] h-[45vw] bg-primary-orange rounded-full'></div>

            {/* Main Container */}
            <div className='flex flex-row justify-between items-start gap-12 relative w-full mt-16 px-6'>

                {/* LEFT SIDE */}
                <div className='flex flex-col flex-1'>

                    {/* Badge */}
                    <div className='inline-flex w-fit items-center gap-2 fade-in text-white border border-white/10 bg-white/5 py-1 px-3 text-[14px] rounded-full'>
                        <BsStars className='text-[18px]' />
                        {t(`${set}.title`)}
                    </div>

                    {/* Heading */}
                    <h1 className='text-[55px] leading-tight tracking-tight font-medium mt-6 text-white/90 font-figtree'>
                        {t(`${set}.heading`)}
                    </h1>

                    {/* Supporting Text */}
                    <p className='font-poppins max-w-[80%] text-md text-white/70 mt-4'>
                        {t(`${set}.supportingText`)}
                    </p>

                    {/* Scroll Indicator */}
                    <a href="#explore" className="relative cursor-pointer group hover:scale-105 duration-300 mt-8 w-32 h-32 flex items-center justify-center">

                        {/* Rotating Text */}
                        <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <defs>
                                    <path
                                        id="scrollPath"
                                        d="M50,50 m-28,0 a28,28 0 1,1 56,0 a28,28 0 1,1 -56,0"
                                        fill="none"
                                    />
                                </defs>

                                <text
                                    className="text-[6px] font-medium fill-white/75"
                                    style={{ letterSpacing: "0.4px" }}
                                >
                                    <textPath href="#scrollPath" startOffset="0%">
                                        {`\u00A0${tCommon2('scrollDown')} \u00A0•\u00A0 ${tCommon2('scrollDown')} \u00A0•\u00A0 ${tCommon2('scrollDown')} \u00A0•\u00A0`}
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Center Arrow */}
                        <PiArrowCircleDownThin
                            className="text-white/70 group-hover:text-primary-orange text-6xl duration-300"
                        />
                    </a>
                </div>

                {/* RIGHT SIDE */}
                <div className="max-w-[400px] mt-12">
                    <p className='font-poppins text-md text-white/70'>
                        {t(`${set}.description`)}
                    </p>

                    <Link href='/book-appointment' >
                        <button className="flex items-center mt-10 gap-2 py-3 px-8 bg-primary-orange text-white text-md font-semibold cursor-pointer font-poppins rounded-full transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                            {tCommon2('getQuote')} <IoIosArrowForward />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Hero