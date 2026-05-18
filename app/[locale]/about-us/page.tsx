import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/app/components/home/Hero'
import SecondaryHero from '@/app/components/common/SecondaryHero'
import CTA from '@/app/components/home/CTA'

import Faq from '@/app/components/common/Faq'
import Contact from '@/app/components/home/Contact'
import SpotlightCards from '@/app/components/about/SpotlightCards';
import OurLeadership from '@/app/components/about/OurLeadership';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const {locale} = await params
    const t = await getTranslations({ locale, namespace: 'common.meta.about-us' });
    const baseUrl = 'https://innovazy.com';
    const l = locale == "en" ? "" : "ar/";


    return {
        title: t('title'),
        description: t('description'),

        alternates: {
            canonical: `https://innovazy.com/${l}about-us`,
            languages: {
                en: `https://innovazy.com/about-us`,
                ar: `https://innovazy.com/ar/about-us`,
                'x-default': `https://innovazy.com/en/about-us`,
            },
        },

        metadataBase: new URL(baseUrl),
    };
}

export default async function AboutUs({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('about-us');

    return (
        <div className="block relative box-border px-8 sm:px-16">
            <SecondaryHero locale="about-us" set="a" />
            {/* <SpotlightCards/> */}
            <CTA />
            <Contact />
            <Faq />
        </div>
    );
}
