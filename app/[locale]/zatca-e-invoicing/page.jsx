import dynamic from 'next/dynamic'
import KeyFeatures from '@/app/components/zatca/KeyFeatures'
import Script from 'next/script'
import React from 'react'
import Industries from '@/app/components/zatca/Industries'
import SuiteSupported from '@/app/components/zatca/SuiteSupported'
import InvoicingSample from '@/app/components/zatca/InvoicingSample'
import SecondaryHero from '@/app/components/common/SecondaryHero'
import Faq from '@/app/components/common/Faq'
import Contact from '@/app/components/home/Contact'
import CTA from '@/app/components/home/CTA'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'common.meta.zatca' });
  const baseUrl = 'https://innovazy.com';
  const l = locale == "en" ? "en" : "ar";

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://innovazy.com/${l}/zatca-e-invoicing`,
      languages: {
        en: `https://innovazy.com/zatca-e-invoicing`,
        ar: `https://innovazy.com/ar/zatca-e-invoicing`,
        'x-default': `https://innovazy.com/zatca-e-invoicing`,
      },
    },
  };
}

const Zatcha = () => {
    return (
        <div className='block relative box-border px-8 sm:px-16'>
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
                <ServicesHeader locale="zatca" set="z" isTitle={true} />
            </div> */}
            <SecondaryHero locale="zatca" set="z"/>
            <KeyFeatures/>
            <Industries/>
            <InvoicingSample/>
            <SuiteSupported/>
            <CTA/>
            <Contact/>
            <Faq/>
            

        </div>
    )
}

export default Zatcha
