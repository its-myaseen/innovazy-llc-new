'use client'
import React, { useEffect, useState } from 'react'

const NavShadow = () => {
    //True when completed required scroll (for navbar animation)
    const [isScrolled, setIsScrolled] = useState(false);
    //True when scrolled halfway (for navbar animation)
    const [isHalfScrolled, setIsHalfScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 200) {
                setIsHalfScrolled(true);
            } else {
                setIsHalfScrolled(false);
            }
            if (scrollTop > 550) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <div className={`fixed inset-0 z-[9990] h-[100px] bg-gradient-to-b from-black to-transparent duration-300 ${isScrolled ?  'translate-y-0' : '-translate-y-full'}`}>

        </div>
    )
}

export default NavShadow
