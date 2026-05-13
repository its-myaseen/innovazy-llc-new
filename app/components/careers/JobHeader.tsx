import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";


const JobHeader = ({ JobTitle, JobTagLine, Location, JobType }) => {
    return (
        <div className='block relative box-border pt-26'>
            <div className='flex justify-between items-start flex-col relative w-full box-border h-[80vh] overflow-hidden rounded-xl'>
                <img src="/assets/test_blog.jpg" alt="blog  thumbnail" className='block absolute top-0 left-0 w-full object-cover' />

                <div className='flex flex-wrap justify-start items-start relative px-12 py-8 gap-4 z-10'>
                    <div className='flex flex-row items-center leading-snug gap-2 box-border px-4 back h-full py-2 bg-black/10 backdrop-blur-2xl text-white/85 rounded-full border-[1px] border-white/20'>
                        <IoLocationOutline className='text-lg text-primary-orange' />
                        {Location}
                    </div>

                    <div className='flex flex-row items-center py-2 leading-snug gap-2 box-border px-4 h-full bg-black/10 backdrop-blur-2xl text-white/85 rounded-full border-[1px] border-white/20'>
                        <BsClockHistory className='text-lg text-primary-orange' />
                        {JobType}
                    </div>

                </div>

                <div className='block relative bottom-12 left-0 w-full box-border px-12'>
                    <div className='block relative w-full box-border px-6 py-6 pb-8 backdrop-blur-3xl bg-black/10 rounded-lg'>
                        <h1 className='text-4xl font-poppins text-white font-semibold'>{JobTitle || "Untitled Position"}</h1>
                        <p className='text-white/80 leading-tight mt-2'>{JobTagLine || ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobHeader