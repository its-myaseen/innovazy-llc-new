import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

const OurPartners = () => {
    const t = useTranslations('home.partners')
    const images = [
        "/assets/partners/odooLogo.webp", "/assets/partners/Huawie.webp", "/assets/clients/1.webp", "/assets/clients/10.webp"
    ]
    return (
        <div className='flex flex-col sm:flex-row w-full items-start pb-26 gap-16 mt-16'>
            <div className='block relative flex-1 box-border'>
                <h1 className='block relative text-white text-5xl  max-w-[600px]'>
                    {t('heading')}
                </h1>
                <p className='block relative box-border max-w-[500px] mt-6 text-md text-white/70'>
                    {t('description')}
                </p>
            </div>

            <div className='block relative flex-1 box-border'>
                 <div dir="ltr" className='flex flex-row justify-center items-center gap-[10px] md:gap-4 w-[80%] mt-6'>
                        <div className=' hidden sm:flex h-[10px] sm:h-[100px] items-center justify-center'>
                            <Image height={242} width={111} src="/assets/ui/left_leaf.webp" alt={`Partner`} className='w-full h-full object-contain' />
                        </div>

                        <div className='grid grid-cols-2 h-full justify-center items-center gap-x-[18px] gap-y-[10px] md:gap-x-14 md:gap-y-[25px] relative'>
                            {
                                images.map((image, index) => (
                                    <div key={index} className='h-[90px]  sm:h-[28px] flex items-center justify-center'>
                                        <img src={image} alt={`Partner ${index + 1}`} className=' h-full object-contain' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='h-[140px] sm:h-[100px] hidden sm:flex items-center justify-center'>
                            <Image height={242} width={111}  src="/assets/ui/right_leaf.webp" alt={`Partner`} className=' h-full object-contain' />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default OurPartners
