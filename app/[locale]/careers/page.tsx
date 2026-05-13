import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/app/components/home/Hero'
import SecondaryHero from '@/app/components/common/SecondaryHero'
import CTA from '@/app/components/home/CTA'
import RolesData from '@/app/components/careers/RolesData'

import Faq from '@/app/components/common/Faq'
import Contact from '@/app/components/home/Contact'


export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: 'common.meta.careers' });
    const baseUrl = 'https://innovazy.com';
    const l = locale == "en" ? "" : "ar/";


    return {
        title: t('title'),
        description: t('description'),

        alternates: {
            canonical: `https://innovazy.com/${l}industries`,
            languages: {
                en: `https://innovazy.com/en/industries`,
                ar: `https://innovazy.com/ar/industries`,
                'x-default': `https://innovazy.com/en/industries`,
            },
        },

        metadataBase: new URL(baseUrl),
    };
}

export default async function Careers({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('careers');

    return (
        <div className="block relative box-border px-8 sm:px-16">
            <SecondaryHero locale="careers" set="c" />
            <RolesData/>
            <CTA />
            <Contact />
            <Faq />
        </div>
    );
}
