'use client';

import { useEffect, useRef, useState } from 'react';
import { FaAward, FaProjectDiagram, FaUsers, FaRegClock, FaCalendarAlt, FaHandshake, FaRedoAlt, FaHeart } from 'react-icons/fa';
import { FaFolderOpen } from "react-icons/fa";
import { useTranslations } from 'next-intl';

const Counter = ({ end, suffix = '' }:any) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 1500;
                    const increment = Math.ceil(end / (duration / 16));

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, 16);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end]);

    return (
        <div ref={ref} className="text-4xl w-full text-start font-bold text-white/80">
            {count}
            {suffix}
        </div>
    );
};

const StatsSection = () => {
    const t = useTranslations('home.stats')

    const stats = [
        { icon: <FaFolderOpen className="w-8 h-8" />, number: 150, suffix: '+', label: t('projectsDelivered') },
        { icon: <FaUsers className="w-8 h-8" />, number: 140, suffix: '+', label: t('happyClients') },
        { icon: <FaCalendarAlt className="w-8 h-8" />, number: 10, suffix: '+', label: t('yearsOfExcellence') },
        { icon: <FaHeart className="w-8 h-8" />, number: 96, suffix: '%', label: t('clientRetentionRate') },
    ];

    return (
        <div className="bg-transparent pb-16 pt-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-row gap-4 items-center text-center group">
                            <div className=" text-primary-orange transition-transform group-hover:scale-110 duration-300">
                                {stat.icon}
                            </div>
                            <div className='block relative box-border'>
                                <Counter end={stat.number} suffix={stat.suffix} />
                                <p className="text-white/80 font-poppinsRegular leading-snug font-medium text-lg text-start">
                                    {stat.label}
                                </p>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;