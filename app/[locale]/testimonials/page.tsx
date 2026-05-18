import dynamic from "next/dynamic";
import { getTranslations } from 'next-intl/server';
import Script from "next/script";
const OurIndustriees = dynamic(() => import("@/app/components/Industries/OurIndustriees"))
const ChallengesTable = dynamic(() => import("@/app/components/Industries/ChallengesTable"))
import SecondaryHero from '@/app/components/common/SecondaryHero'
import OurReviews from '@/app/components/home/OurReviews';
import CTA from '@/app/components/home/CTA'
import TestimonialsGrid from  '@/app/components/testimonials/TestimonialsGrid'

import Faq from  '@/app/components/common/Faq'
import Contact from '@/app/components/home/Contact'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params
  const t = await getTranslations({ locale, namespace: 'common.meta.testimonials' });
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

export default function Industries() {
  return (
    <div className="block relative px-16 box-border">
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-E02S2MN2Q1"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E02S2MN2Q1');
        `}
      </Script>

      {/* <div className='relative box-border mt-[30px]'>
        <ServicesHeader locale="industries" set="i" isTitle={true} />
      </div> */}
      <SecondaryHero locale="testimonials" set="t"  />
      {/* <OurReviews/> */}
      <TestimonialsGrid/>
      <CTA/>
      <Contact/>
      <Faq/>

    </div>
  );
}
