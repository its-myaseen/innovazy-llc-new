"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  const [isOdoo, setIsOdoo] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname && pathname.includes("/odoo")) {
      setIsOdoo(true);
    } else {
      setIsOdoo(false);
    }
  }, [pathname]);
  return (
    <div className="block relative w-full box-border w-full overflow-hidden min-h-full bg-black">
      <div className="block relative max-w-[1600px] bg-black mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
