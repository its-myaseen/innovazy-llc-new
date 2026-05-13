'use client';

import React, {
    useEffect,
    //useEffect, 
    useRef
} from 'react'
import Image from 'next/image';

const IndustriesSpotlight = ({ data }) => {

    const containerRef = useRef(null);


    useEffect(() => {
        const container = containerRef.current;
        const cards = Array.from(container.querySelectorAll('[class^="spotlight-card"]'));

        if (cards.length === 0) {
            console.log("No cards found.");
        } else {
            const mouse = {
                x: 0,
                y: 0,
            };

            const updateContainerSize = () => {
                const rect = container.getBoundingClientRect();
                containerSize.w = rect.width;
                containerSize.h = rect.height;
            };

            const onMouseMove = (event) => {
                const { clientX, clientY } = event;
                const rect = container.getBoundingClientRect();
                const { w, h } = containerSize;
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                const inside = x < w && x > 0 && y < h && y > 0;

                if (inside) {
                    mouse.x = x;
                    mouse.y = y;
                    cards.forEach((card) => {
                        const cardRect = card.getBoundingClientRect();
                        const cardX = -(cardRect.left - rect.left) + mouse.x;
                        const cardY = -(cardRect.top - rect.top) + mouse.y;
                        card.style.setProperty('--mouse-x', `${cardX}px`);
                        card.style.setProperty('--mouse-y', `${cardY}px`);
                    });
                }
            };

            let containerSize = {
                w: 0,
                h: 0,
            };

            updateContainerSize();
            window.addEventListener('resize', updateContainerSize);
            window.addEventListener('mousemove', onMouseMove);

            return () => {
                window.removeEventListener('resize', updateContainerSize);
                window.removeEventListener('mousemove', onMouseMove);
            };
        }
    }, [data]); // Run effect when data changes

    return (
        <>
            <div ref={containerRef} data-spotlight>
                <div className="relative group">
                    <div className="w-full mt-14">
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-stretch w-full gap-4 sm:gap-5'>
                            {
                                data.map((data, ind) => {
                                    return (
                                        <div key={ind} className={`flex-1 p-3 xs:p-4 pb-10 xs:pb-12 sm:pb-14 rounded-xl sm:rounded-2xl background-glass shadow-lg flex flex-col`}>
                                            <Image width={1365} alt={data.title} height={768} src={data.image} className='w-full h-[150px] xs:h-[180px] sm:h-[200px] rounded-lg object-cover' />
                                            <h2 className='text-lg xs:text-xl sm:text-[22px] text-white font-medium mt-4 xs:mt-5 sm:mt-6 leading-tight'>
                                                {data.title}
                                            </h2>
                                            <p className='text-sm xs:text-[14px] sm:text-[15px] text-white/80 mt-2 leading-tight'>
                                                {data.description}
                                            </p>

                                            <ul className='list-disc pl-5 text-sm xs:text-[14px] sm:text-[15px] text-white/80 mt-2 leading-tight'>
                                                <li>{data.p1}</li>
                                                <li>{data.p2}</li>
                                                <li>{data.p3}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustriesSpotlight