import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

import { IoIosArrowForward } from "react-icons/io";



const SuiteSupported = () => {
    const t = useTranslations("zatca");
    const tCommon2 = useTranslations("common2");

    const redirectToNewTab = (url) => {
        // Ensure the URL has http or https
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        window.open(url, '_blank'); // Opens the URL in a new tab
    };
    return (
        <div className={`flex flex-col md:flex-row justify-start pb-26 md:justify-between items-start relative box-border mt-32 mb-24`}>
            <div className='block relative flex-1 box-border'>
                <h2 className={`text-white w-full text-5xl text-start leading-tight`}>
                    <strong className='not-bold'>
                        {t("suite.headingSliceOne")}<strong className='text-primary-orange'>{t("suite.headingSliceTwo")}</strong>{t("suite.headingSliceThree")}
                    </strong>
                </h2>
                <p className={`w-[100%] md:w-[65%] mt-5 mb-8 text-white/60 text-start text-[14px] sm:text-[16px] leading-7`}>{t("suite.desc")}</p>
                <a href="https://suite.innovazy.com" target='_blank'>
                    <button className="flex items-center mt-10 gap-2 py-3 px-8 bg-primary-orange text-white text-md font-semibold cursor-pointer font-poppins rounded-full transition duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                        {tCommon2("exploreSuite")} <IoIosArrowForward />
                    </button>
                </a>
            </div>
            <div className='block relative box-border md:w-[650px]'>
                <Image src={`/assets/images/SuiteMockup.webp`} height={2769} width={5350} alt="Zatcha Mockup" className='block relative w-full mt-[50px] md:mx-auto md:w-[90%]' />

            </div>
        </div>
    )
}

export default SuiteSupported
