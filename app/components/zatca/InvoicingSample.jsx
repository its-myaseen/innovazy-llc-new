import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const InvoicingSample = () => {
    const t = useTranslations("zatca");
    const tCommon = useTranslations("common");

    return (
        <div className={`block relative box-border  mt-36`}>
            <h2 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> <b className='font-normal max-w-[600px]'>{t("invoicing.headingSliceOne")}  {t("invoicing.headingSliceTwo")}</b>   <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h2>
            
            <p className='block relative text-white/70 text-center max-w-[650px] mt-3 mx-auto'>
                {t("invoicing.desc")}
            </p>
            <div className={`block relative`}>
                <Image height={948} width={1080} src={`/assets/images/ZATCA_Invoice.png`} alt="Zatcha Mockup" className='block relative w-full mt-[50px] md:mx-auto md:w-[90%]' />
            </div>
        </div>
    )
}

export default InvoicingSample
