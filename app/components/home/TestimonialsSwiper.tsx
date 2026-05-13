"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import testimonials from "@/utils/testimonials.utils";
import { BsStars } from "react-icons/bs";


export default function TestimonialsSwiper() {
    return (
        <div className="relative w-full z-10 max-w-5xl mx-auto py-16 mt-8 bg-white/5 rounded-2xl backdrop-blur-2xl border border-white/10">

            {/* Swiper */}
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{
                    clickable: true,
                }}
                className="h-[300px]"   // ✅ IMPORTANT
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">

                        {/* CENTER WRAPPER */}
                        <div className="flex items-center justify-center h-full text-center px-6 overflow-visible">

                            <div className="max-w-2xl">
                               <img src={item.logo} alt="Client Logo" className="block relative mx-auto h-[45px]" />
                                <p className="text-white/70 text-lg mt-8 line-clamp-5">
                                    "{item.message}"
                                </p>

                                <div className="flex flex-row justify-center mt-6 items-center gap-2">
                                    <p className="text-primary-orange text-xl">
                                        {item.category}
                                    </p>
                                    <p className="text-primary-orange font-medium">
                                        {item.name}
                                    </p>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* LEFT ARROW */}
            <button className="custom-prev cursor-pointer absolute top-1/2 left-6 -translate-y-1/2 z-10 bg-black/70 border border-white/10 text-white hover:text-primary-orange hover:border-primary-orange p-3 rounded-full backdrop-blur-md transition">
                <FiChevronLeft size={22} />
            </button>

            {/* RIGHT ARROW */}
            <button className="custom-next cursor-pointer absolute top-1/2 right-6 -translate-y-1/2 z-10 bg-black/70 border border-white/10 text-white hover:text-primary-orange hover:border-primary-orange p-3 rounded-full backdrop-blur-md transition">
                <FiChevronRight size={22} />
            </button>

        </div>
    );
}