"use client"
import React, { useEffect, useState } from 'react'
import IndustryCard from './IndustryCard'
import { Carousel } from "primereact/carousel";
import { useLocale, useTranslations } from 'next-intl';

const IndustryWeServe = () => {

    const [isMobile, setIsMobile] = useState(false);
    const t = useTranslations('odoo');
    const locale = useLocale();

    const data = [
        {
            heading: t("o.sectionFour.cards.cardOne.heading"),
            highlight: t("o.sectionFour.cards.cardOne.highlight"),
            description: t("o.sectionFour.cards.cardOne.description"),
            image: t("o.sectionFour.cards.cardOne.image"),
        },
        {
            heading: t("o.sectionFour.cards.cardTwo.heading"),
            highlight: t("o.sectionFour.cards.cardTwo.highlight"),
            description: t("o.sectionFour.cards.cardTwo.description"),
            image: t("o.sectionFour.cards.cardTwo.image"),
        },
        {
            heading: t("o.sectionFour.cards.cardThree.heading"),
            highlight: t("o.sectionFour.cards.cardThree.highlight"),
            description: t("o.sectionFour.cards.cardThree.description"),
            image: t("o.sectionFour.cards.cardThree.image"),
        },
        {
            heading: t("o.sectionFour.cards.cardFour.heading"),
            highlight: t("o.sectionFour.cards.cardFour.highlight"),
            description: t("o.sectionFour.cards.cardFour.description"),
            image: t("o.sectionFour.cards.cardFour.image"),
        },
        {
            heading: t("o.sectionFour.cards.cardFive.heading"),
            highlight: t("o.sectionFour.cards.cardFive.highlight"),
            description: t("o.sectionFour.cards.cardFive.description"),
            image: t("o.sectionFour.cards.cardFive.image"),
        },
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);


    const responsiveOptions = [
        {
            breakpoint: "1400px",
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "768px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const itemTemplate = (item) => (
        <div className="sm:px-2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <IndustryCard content={item} />
        </div>
    );
    return (
        <div className={`block relative box-border pb-12 sm:pb-16 md:pb-20 mt-12 xs:mt-16 sm:mt-20 md:mt-24`}>
            <h2 className='block relative text-2xl xs:text-3xl sm:text-4xl max-w-[600px] mx-auto text-black font-semibold text-center leading-tight px-4 sm:px-0'>
                {t("o.sectionFour.mainHeading")}
            </h2>
            <p className='block relative text-sm xs:text-base sm:text-md text-center mx-auto text-black/80 max-w-[500px] leading-tight mt-3 xs:mt-4 sm:mt-4 px-4 sm:px-0'>
                {t("o.sectionFour.desc")}
            </p>



            <div className='mt-8 xs:mt-10 sm:mt-12 flex justify-center' dir="ltr">
                <Carousel
                    value={data}
                    itemTemplate={itemTemplate}
                    numVisible={isMobile ? 1 : 3}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    circular
                    autoplayInterval={5000}
                    showNavigators={!isMobile}
                    showIndicators={false}
                    className="centered-carousel"
                    pt={{
                        root: { className: "w-full" },
                        container: { className: "w-full" },
                        content: { className: "w-full justify-center" },
                        indicators: {
                            className: "flex justify-center gap-2 mt-4"
                        },
                        indicatorButton: {
                            className: "w-3 h-3 rounded-full bg-gray-300 hover:bg-secondary-odoo transition-colors"
                        },
                        nextButton: {
                            style: { height: "40px", width: "40px", borderRadius: "50%" },
                            className: "background-glass dark:text-white text-black hover:bg-secondary-odoo transition-colors",
                        },
                        previousButton: {
                            style: { height: "40px", width: "40px", borderRadius: "50%" },
                            className: "background-glass dark:text-white text-black hover:bg-secondary-odoo transition-colors",
                        },
                    }}
                />

            </div>


        </div>
    )
}

export default IndustryWeServe