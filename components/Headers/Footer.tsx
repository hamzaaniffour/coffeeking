"use client";
// import React, { useEffect, useState } from "react";
import { footerlinks } from "@/libs/footer-menu";
import Link from "next/link";
// import { FooterMenu } from "@/app/graphql/menuItems";

// export interface MenuItem {
//   label: string;
//   uri: string;
//   childItems: {
//     nodes: MenuItem[];
//   };
// }

const Footer = () => {
  // const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await FooterMenu();
  //     setMenuItems(data);
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="mt-16">
      <footer className="bg-white shadow border-t-2 border-gray-100 w-full py-10 mt-16 px-5 lg:px-0 xl:px-0">
        <div className="max-w-[1200px] mx-auto">
          <div className="lg:flex justify-between gap-10">
            <div>
              <h4 className="mb-0.5 text-2xl text-black font-semibold">
                CoffeeKing
              </h4>
              <div className="h-[3px] rounded-full mb-5 w-[130px] bg-gradient-to-r from-gray-400 to-gray-100"></div>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <Link
                      href={footerlink.slug}
                      className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
                    >
                      {footerlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 xl:mt-0">
              <h4 className="mb-0.5 text-2xl text-black font-semibold">
                Quick Links
              </h4>
              <div className="h-[3px] rounded-full mb-5 w-[135px] bg-gradient-to-r from-gray-400 to-gray-100"></div>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <Link
                      href={footerlink.slug}
                      className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
                    >
                      {footerlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="mb-0.5 text-2xl text-black font-semibold">
                Best Brands
              </h4>
              <div className="h-[3px] rounded-full mb-5 w-[130px] bg-gradient-to-r from-gray-400 to-gray-100"></div>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <Link
                      href={footerlink.slug}
                      className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
                    >
                      {footerlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="mb-0.5 text-2xl text-black font-semibold">
                Contact Us
              </h4>
              <div className="h-[3px] rounded-full mb-5 w-[130px] bg-gradient-to-r from-gray-400 to-gray-100"></div>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <Link
                      href={footerlink.slug}
                      className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
                    >
                      {footerlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="p-5 text-center bg-gray-100 text-black font-medium">
      © 2021 Coffeeworks Media Ltd.
      </div>
    </div>
  );
};

export default Footer;
