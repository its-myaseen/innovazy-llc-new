import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import { BsStars } from "react-icons/bs";


const KeyFeatures = () => {
    const t = useTranslations("zatca");
    const tCommon = useTranslations("common");

    return (
        <div id="explore" className={`block relative box-border mt-16`}>
         
            <h1 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> {t("keyFeatures.headingSliceOne")}  {t("keyFeatures.headingSliceTwo")}   <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h1>
            <p className='block relative text-white/70 text-center max-w-[800px] mt-3 mx-auto'>
                {t("keyFeatures.desc")}
            </p>
            <div className={`flex flex-col md:flex-row justify-between gap-10 w-full box-border mt-20`}>
                <div className='block relative flex-1'>
                    <div className='flex justify-start items-start gap-5 relative box-border'>
                        <BsStars className='text-primary-orange text-2xl' />
                        <div className='block relative flex-1 box-border'>
                            <h2 className={`text-white text-xl leading-tight`}>{t("keyFeatures.points.one.heading")}</h2>
                            <p className={`text-white/70 text-md`}>{t("keyFeatures.points.one.desc")}</p>
                        </div>
                    </div>

                    <div className='flex justify-start items-start gap-5 mt-8 relative box-border'>
                        <BsStars className='text-primary-orange text-2xl' />
                        <div className='block relative flex-1 box-border'>
                            <h2 className={`text-white text-xl leading-tight`}>{t("keyFeatures.points.two.heading")}</h2>
                            <p className={`text-white/70 text-md`}>{t("keyFeatures.points.two.desc")}</p>
                        </div>
                    </div>

                    <div className='flex justify-start items-start gap-5 mt-8 relative box-border'>
                        <BsStars className='text-primary-orange text-2xl' />
                        <div className='block relative flex-1 box-border'>
                            <h2 className={`dark:text-white text-black text-xl leading-tight`}>{t("keyFeatures.points.three.heading")}</h2>
                            <p className={`text-white/70 text-md`}>{t("keyFeatures.points.three.desc")}</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-start md:justify-end relative flex-1 md:mt-0 mt-8'>
                    <Image height={1481} width={1693} src={`/assets/images/ZATCA_phone_mockup.svg`} alt="Zatcha Mockup" className='block relative w-full md:w-[90%]' />
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures
