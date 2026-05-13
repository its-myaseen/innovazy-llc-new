import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import Hero from  '@/app/components/home/Hero'
import OurClients from '../components/home/OurClients';
import StatsSection from '../components/home/StatsSection'
import OurPartners from '../components/home/OurPartners';
import AboutInnovazy from '../components/home/AboutInnovazy';
import OurReviews from '../components/home/OurReviews';
import CTA from '@/app/components/home/CTA'
import Benifits from  '@/app/components/home/Benifits'

import Faq from  '../components/common/Faq'
import Contact from '../components/home/Contact'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <div className="block relative box-border px-8 sm:px-16">
      <Hero/>
      <StatsSection />
      <OurClients/>
      <OurPartners/>
      <AboutInnovazy/>
      <OurReviews/>
      <Benifits/>
      <CTA/>
      <Contact/>
      <Faq/>
    </div>
  );
}
