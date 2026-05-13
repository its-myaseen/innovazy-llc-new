'use client'
import React, { useState } from 'react'
import testimonials from '@/utils/testimonials.utils'
import TestimonialCard from './TestimonialCard'
import { IoMdClose } from "react-icons/io";


interface reviewInterface {
    id: string,
    logo: string,
    name: string,
    message: string,
    category: any,

}
const TestimonialWrapper = () => {
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
    return (
        <div className='block relative w-full box-border mt-16 h-[65vh]'>
            <div className='grid grid-rows-2 sm:grid-cols-4 items-start relative h-full w-full gap-6'>
                <div className='block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary-orange/20 blur-[180px]'></div>
                <div className='flex animate-scroll-right flex-row sm:flex-col gap-6 sm:animate-scroll-up'>
                    {[...testimonials, ...testimonials].map((data, ind) => (
                        <TestimonialCard toggleModal={toggleModal} data={data} key={ind} />
                    ))}
                </div>
                <div className='flex sm:animate-scroll-down flex-row sm:flex-col gap-6 animate-scroll-left'>
                    {[...testimonials, ...testimonials].map((data, ind) => (
                        <TestimonialCard toggleModal={toggleModal} data={data} key={ind} />
                    ))}
                </div>
                <div className='hidden sm:flex overflow-hidden sm:animate-scroll-up flex-row sm:flex-col gap-6 scrollRight'>
                    {[...testimonials, ...testimonials].map((data, ind) => (
                        <TestimonialCard toggleModal={toggleModal} data={data} key={ind} />
                    ))}
                </div>
                <div className='hidden sm:flex sm:animate-scroll-down flex-row sm:flex-col gap-6 scrollLeft'>
                    {[...testimonials, ...testimonials].map((data, ind) => (
                        <TestimonialCard toggleModal={toggleModal} data={data} key={ind} />
                    ))}
                </div>
            </div>
            <div className='hidden sm:block pointer-events-none absolute w-full h-[30%] bg-gradient-to-t from-black to-transparent bottom-0 left-0'></div>
            <div className='hidden sm:block pointer-events-none absolute w-full h-[30%] bg-gradient-to-b from-black to-transparent top-0 left-0'></div>

            {
                isModal && <div className='flex fixed justify-center items-center h-screen  w-full inset-0 z-[500] backdrop-blur-2xl'>
                    <div className='block relative bg-black border border-white/10 p-8 rounded-xl max-w-[300px] sm:max-w-[500px] md:max-w-[700px]'>
                        <div onClick={()=>setIsModal(false)} className='flex absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 justify-center items-center h-8 w-8 rounded-full bg-black cursor-pointer border border-primary-orange border border-secondary-gray'>
                            <IoMdClose className='text-lg text-primary-orange'/>
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

export default TestimonialWrapper
