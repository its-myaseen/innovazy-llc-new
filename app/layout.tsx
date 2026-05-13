import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto, Figtree } from "next/font/google";
import "@/app/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innovazy Website",
  description: "Bilingual Innovazy Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use getLocale() instead of params to safely get the locale in the root layout.
  // This allows you to have a single root layout while supporting multiple nested layouts inside [locale]!
  const locale = await getLocale();

  // Providing all messages to the client side
  const messages = await getMessages();

  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${roboto.className} ${figtree.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full block relative" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
