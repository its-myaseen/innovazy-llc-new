"use client";
import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { useTranslations } from "next-intl";
// import { useAppContext } from '@/context/AppContext';

import dynamic from "next/dynamic";

const Header = () => {
  const [showModal, setModal] = React.useState(false);
  const handleClick = () => {
    setModal(true);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const t = useTranslations("odoo");
  const tCommon = useTranslations("common");

  return (
    <>
      <div className={`block relative box-border mb-20 pb-32 pt-16`}>
        <div className="flex flex-col md:flex-row justify-between items-center min-h-screen md:h-screen relative w-full box-border gap-6 md:gap-0 px-4 md:px-0 py-6 md:py-0">
          <div className="block relative flex-1 w-full md:w-auto">
            <h1 className="block relative font-figtree text-4xl sm:text-5xl md:text-6xl text-black font-semibold leading-tight">
              {t("o.heading")}
            </h1>
            <p className="block relative text-base sm:text-lg md:text-lg text-black/80 w-full md:w-[80%] leading-tight mt-6">
              {t("o.description")}
            </p>
            {/* <OdooButton btnText={tCommon('buttons.primaryButton')} image={`/assets/icons/forwardArrow.png`} imageAlt="Get Consultation" onClick={handleClick} className="mt-8" /> */}
          </div>

          <img
            src="/assets/images/OdooHeaderImage.png"
            alt="Innovazy Official Odoo Partner Badge"
            className="block relative h-full object-contain sm:w-3/4 md:w-[40%] flex-shrink-0"
          />
        </div>
      </div>

      {typeof window !== "undefined" ? (
        <PopupModal
          open={showModal}
          onModalClose={() => setModal(false)}
          url="https://calendly.com/innovazy/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151414&text_color=ffffff&primary_color=f17840"
          rootElement={document.body}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
