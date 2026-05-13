import React from 'react'

const OurLeadership = () => {

    const team = [
        {
            image: "/assets/team/Fiaz.webp",
            name: 'Fiza Ahmed Saleemi',
            role: "Founder & CEO",
            desc: "Fiaz Ahmed Saleemi, CEO of Innovazy LLC, leads with vision to drive innovation and digital growth."
        },
        {
            image: "/assets/team/Saqlain.webp",
            name: 'Saqlain Azim',
            role: "Chief Operating Officer",
            desc: "Saqlain, COO of Innovazy LLC, ensures smooth operations and drives execution excellence across all projects."
        },
        {
            image: "/assets/team/Nauman.webp",
            name: 'Nauman',
            role: "Chief Technical Officer",
            desc: "Nauman, CTO of Innovazy LLC, leads the technical vision and drives innovation through scalable, high-performance solutions."
        }
    ]
    return (
        <div className='block relative w-full box-border mt-16 pb-26'>
            <h1 className='flex flex-row justify-center items-center gap-4 relative text-center font-poppins text-4xl text-white'>
                <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span> Our Leadership <span className='block relative w-[80px] h-[2px] bg-primary-orange'></span>
            </h1>
            <p className='block relative text-white/70 text-center max-w-[450px] mt-3 mx-auto'>
                Meet the minds shaping Innovazy with vision, experience, and innovation.
            </p>

            <div className='flex flex-wrap justify-center gap-6 items-start w-full box-border'>
                {team.map((data, ind) => {
                    return (
                        <div className='flex flex-col justify-start items-center relative w-[300px] p-8 bg-white/5 border border-white/10 rounded-xl overflow-hidden'>
                            <div className='block relative h-[80px] w-[80px] rounded-full overflow-hidden'>
                                <img src={data.image} alt="Leadership Image" className='block relative h-full w-full rounded-full object-cover overflow-hidden' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurLeadership
