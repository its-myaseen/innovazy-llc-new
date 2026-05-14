import dynamic from "next/dynamic";
import Header from "@/app/components/odoo/Header";
const IndustryWeServe = dynamic(
  () => import("@/app/components/odoo/IndustryWeServe"),
);
import OdooApps from "@/app/components/odoo/OdooApps";
import ShortNode from "@/app/components/odoo/ShortNode";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import WhyInnovazyForOdoo from "@/app/components/odoo/WhyInnovazyForOdoo";
const WhyOdoo = dynamic(() => import("@/app/components/odoo/WhyOdoo"));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params
  const t = await getTranslations({ locale, namespace: "common.meta.odoo" });
  const baseUrl = "https://innovazy.com";
  const l = locale == "en" ? "en" : "ar";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://innovazy.com/${l}/services/odoo`,
      languages: {
        en: `https://innovazy.com/en/services/odoo`,
        ar: `https://innovazy.com/ar/services/odoo`,
        "x-default": `https://innovazy.com/en/services/odoo`,
      },
    },
  };
}

export default function Odoo() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-E02S2MN2Q1"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E02S2MN2Q1');
        `}
      </Script>
      <div className="block relative box-border w-full bg-primary-odoo px-8 sm:px-16">
        <Header />
        <OdooApps />
        <ShortNode />
        <WhyOdoo />
        <WhyInnovazyForOdoo />
        <IndustryWeServe />
      </div>
    </>
  );
}
