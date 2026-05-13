import React from 'react'
import BenifitCard from '@/app/components/common/BenifitCard'
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdBalance } from "react-icons/md";
import { useTranslations } from 'next-intl';

const Benifits = () => {
    const t = useTranslations('careers.benefits')

    const benifits = [
        {
            icon: <MdAutoGraph/>,
            heading:  t('b1Heading'),
            desc:  t('b1Desc')
        },
        {
            icon: <MdOutlineHealthAndSafety/>,
            heading: t('b2Heading'),
            desc: t('b2Desc')
        },
        {
            icon: <MdOutlineShoppingBag/>,
            heading:  t('b3Heading'),
            desc:  t('b3Desc')
        },
        {
            icon: <MdBalance/>,
            heading: t('b4Heading'),
            desc: t('b4Desc')
        },
    ]
  return (
    <div className='block relative w-full box-border mt-26 pb-46'>
         <h1 className='flex flex-row justify-start sm:justify-center items-center gap-4 relative text-start sm:text-center font-poppins text-4xl text-white'>
           <span className='hidden sm:block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')}  <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
        </h1>
        <p className='block relative text-white/70 text-start sm:text-center max-w-[450px] mt-3 sm:mx-auto'>
            {t('sectionDesc')}
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 w-full box-border mt-16 gap-6'>
            {
                benifits.map((data,  ind)=>{
                    return <BenifitCard key={ind} data={data}/>
                })
            }
        </div>
    </div>
  )
}

export default Benifits
