'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import testimonials from '@/utils/testimonials.utils'
import TestimonialCard from '../home/TestimonialCard'
import { IoMdClose } from "react-icons/io";


interface reviewInterface {
    id: string,
    logo: string,
    name: string,
    message: string,
    category: any,
}

const TestimonialsGrid = () => {

    const [isModal, setIsModal] = useState(false)
    const [review, setReview] = useState<reviewInterface>({
        id: '',
        logo: "",
        name: "",
        message: "",
        category: null,
    })
    const toggleModal = (obj) => {
        setIsModal(!isModal)
        if (obj) {
            setReview(obj)
        } else {
            setReview({
                id: '',
                logo: "",
                name: "",
                message: "",
                category: null,
            })
        }
    }
    const t = useTranslations('home.reviews')

    return (
        <div className="block relative box-border w-full mt-16 pb-46 ">
            <h2 className='flex flex-row justify-start sm:justify-center items-center gap-4 relative text-start sm:text-center font-poppins text-4xl text-white'>
                <span className='hidden sm:block relative w-[80px] h-[2px] bg-primary-orange'></span> {t('sectionHeading')} <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h2>
            <p className='block relative text-white/70 text-start sm:text-center max-w-[450px] mt-3 sm:mx-auto'>
                {t('sectionDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-16 w-full box-border">
                {
                    testimonials.map((data, ind) => {
                        return (
                            <TestimonialCard toggleModal={toggleModal} data={data} key={ind} />
                        )
                    })
                }
            </div>


            {
                isModal && <div className='flex fixed justify-center items-center h-screen  w-full inset-0 z-[500] backdrop-blur-2xl'>
                    <div className='block relative bg-black border border-white/10 p-8 rounded-xl max-w-[300px] sm:max-w-[500px] md:max-w-[700px]'>
                        <div onClick={() => setIsModal(false)} className='flex absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 justify-center items-center h-8 w-8 rounded-full bg-black cursor-pointer border border-primary-orange border border-secondary-gray'>
                            <IoMdClose className='text-lg text-primary-orange' />
                        </div>

                        <div className='flex flex-row w-full justify-start items-center gap-4'>
                            <div className='flex justify-center items-center relative h-10 w-10 bg-primary-orange rounded-full font-poppins text-md uppercase text-white font-semibold'>
                                {/* {
                        data.name.slice(0, 2)
                      } */}
                                {
                                    review.category
                                }
                            </div>
                            <h4 className='block relative text-sm text-white font-poppins flex-1 font-semibold'>
                                {review.name}
                            </h4>
                        </div>
                        <p className='relative font-poppins text-sm text-white/60 mt-6'>
                            {review.message}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default TestimonialsGrid
