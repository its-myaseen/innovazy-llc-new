import { useTranslations } from 'next-intl';
import { IoIosArrowForward } from "react-icons/io";
import Link from  'next/link'
import Image from 'next/image';
import React from 'react'


const Industries = () => {
    const t = useTranslations("zatca");
    const tCommon = useTranslations("common");
    return (
        <div className={`block relative box-border  mt-36`}>

            <h2 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> <b className='font-normal max-w-[600px]'>{t("industries.headingSliceOne")}  {t("industries.headingSliceTwo")}</b>   <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h2>

            <div className={`flex flex-col md:flex-row justify-start md:justify-between items-start relative box-border mt-14`}>
                <div className='block relative flex-1 box-border'>

                    <h2 className={`text-white/95 text-3xl w-[100%] text-start leading-tight`}>
                        <strong className='not-bold'>
                            {t("industries.subHeadingSliceOne")}<br /> <strong className='text-primary-orange not-bold'>{t("industries.subHeadingSliceTwo")}</strong> {t("industries.subHeadingSliceThree")}
                        </strong>
                    </h2>
                    <p className={`w-full md:w-[80%] mt-5 mb-10 text-white/60 text-start text-[14px] sm:text-[16px] leading-7`}>{t("industries.desc")}</p>
                    <Link href="/industries">
                        <button className="flex items-center mt-10 gap-2 py-3 px-8 bg-primary-orange text-white text-md font-semibold cursor-pointer font-poppins rounded-full transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                            Explore More <IoIosArrowForward />
                        </button>
                    </Link>
                </div>
                <div className='block relative box-border flex-1 md:mt-0 mt-12'>
                    <Image height={263} width={572} src={`/assets/images/ZaptaIndustries.png`} alt="Zatcha Mockup" className='block relative w-full mt-0 md:mt-10 md:w-[90%]' />

                </div>
            </div>
        </div>
    )
}

export default Industries
