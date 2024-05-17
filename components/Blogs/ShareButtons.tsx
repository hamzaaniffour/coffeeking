import Link from "next/link";
import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaPinterest,
    FaWhatsapp,
  } from "react-icons/fa6";
  import { RiTwitterXLine } from "react-icons/ri";

const ShareButtons = () => {
  return (
    <div>
      <div className="lg:w-1/12 order-first lg:order-last xl:order-last">
        <div className="text-[#e40046] text-xs tracking-wide uppercase font-semibold mb-2 lg:hidden xl:hidden ml-3">
          Share this on:
        </div>
        <div className="flex justify-start lg:justify-center xl:justify-center items-start sticky top-[50px]">
          <div className="bg-slate-100 flex justify-center items-center flex-row lg:flex-col xl:flex-col py-2 lg:py-6 xl:py-6 px-4 rounded-full mb-5">
            <ul className="">
              <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                <Link href="/" className="tooltip" data-tip="Share on facebook">
                  <FaFacebookF className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                </Link>
              </li>
              <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                <Link href="/" className="tooltip" data-tip="Share on LinkedIn">
                  <FaLinkedinIn className="h-6 w-6 text-slate-600 hover:text-[#0A66C2]" />
                </Link>
              </li>
              <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                <Link
                  href="/"
                  className="tooltip"
                  data-tip="Share on Pinterest"
                >
                  <FaPinterest className="h-6 w-6 text-slate-600 hover:text-[#C8232C]" />
                </Link>
              </li>
              <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                <Link href="/" className="tooltip" data-tip="Share on X">
                  <RiTwitterXLine className="h-6 w-6 text-slate-600 hover:text-[#000000]" />
                </Link>
              </li>
              <li className="inline-block md:inline lg:block xl:block">
                <Link href="/" className="tooltip" data-tip="Share on WhatsApp">
                  <FaWhatsapp className="h-6 w-6 text-slate-600 hover:text-[#25D366]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
