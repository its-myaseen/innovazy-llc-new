"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();

  // Initial position based on current locale
  const [switched, setSwitched] = useState(locale === "en");

  // Keep state synced if locale changes
  useEffect(() => {
    setSwitched(locale === "en");
  }, [locale]);

  const handleLocaleChange = (newLocale: string) => {
    // Animate instantly
    setSwitched((prev) => !prev);

    const currentPath = window.location.pathname;

    let strippedPath = currentPath;

    // Remove existing locale from path
    for (const loc of routing.locales) {
      if (currentPath === `/${loc}`) {
        strippedPath = "/";
        break;
      }

      if (currentPath.startsWith(`/${loc}/`)) {
        strippedPath = currentPath.slice(`/${loc}`.length);
        break;
      }
    }

    // Build new localized path
    let newPath: string;

    if (
      newLocale === routing.defaultLocale &&
      routing.localePrefix === "as-needed"
    ) {
      newPath = strippedPath;
    } else {
      newPath = `/${newLocale}${strippedPath === "/" ? "" : strippedPath}`;
    }

    // Save locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Delay reload for animation
    setTimeout(() => {
      window.location.href = newPath || "/";
    }, 300);
  };

  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <div
    title={`Swtich to ${switched? "Arabic" : "English"}`}
      onClick={() => handleLocaleChange(nextLocale)}
      className="hidden sm:block relative p-1 w-[62px] rounded-full bg-white/5 cursor-pointer border border-white/40 backdrop-blur-2xl"
    >
      <div
        className={`flex justify-center items-center relative text-[9px]  h-[22px] w-[26px] rounded-full duration-300 ${switched ? "bg-primary-orange text-white" : "translate-x-full text-black bg-white"
          }`}
      >
        Ar
      </div>
    </div>
  );
}