"use client";
import { useEffect, useState } from "react";
import { footerlinks } from "@/libs/footer-menu";
import Link from "next/link";
import { FaAngleRight, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

interface SettingsData {
  allSettings: {
    generalSettingsTitle: string;
  };
}

const Footer = () => {
  const [data, setData] = useState<SettingsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query getPosts {
              allSettings {
                generalSettingsTitle
              }
            }
          `,
        }),
      });

      const { data } = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-16">
      <footer className="bg-white shadow border-t-2 border-gray-100 w-full py-10 mt-16 px-5 lg:px-0 xl:px-0">
        <div className="max-w-[1200px] mx-auto">
          <div className="lg:flex justify-between gap-10">
            <div>
              <h4 className="mb-4 text-[22px] text-[#000000] font-bold uppercase">
                {data ? (
                  <h1>{data.allSettings.generalSettingsTitle}</h1>
                ) : (
                  <div className="skeleton h-[15px] w-[120px] rounded-none"></div>
                )}
              </h4>
              <p className="max-w-[320px] text-left text-[15px] text-black font-medium mb-2">
              Cyclewaycoffee.net participates in affiliate programs. This means we may earn a small commission if you purchase a product after clicking a link on our site. You won&lsquo;t pay any extra and it helps keep the coffee flowing!
              </p>
              <ul className="flex justify-start items-center gap-1.5 mt-4">
                <li>
                  <Link prefetch={false} href="/" aria-label="Follow us on Facebook">
                    <FaInstagram className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/" aria-label="Follow us on Instagram">
                    <FaFacebook className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/" aria-label="Follow us on Twitter">
                    <FaTwitter className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/" aria-label="Follow us on Pinterest">
                    <FaPinterest className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 xl:mt-0">
            <h4 className="mb-4 text-[22px] text-[#000000] font-bold uppercase">
                Quick Links
              </h4>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <FaAngleRight className="h-4 w-4 inline-block mr-1 -mt-0.5 text-black" />
                    <Link prefetch={false}
                      href={footerlink.slug}
                      className="text-md text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
                    >
                      {footerlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 xl:mt-0">
            <h4 className="mb-4 text-[22px] text-[#000000] font-bold uppercase">
                Categories
              </h4>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <FaAngleRight className="h-4 w-4 inline-block mr-1 -mt-0.5 text-black" />
                    <Link prefetch={false}
                      href={footerlink.slug}
                      className="text-md text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
                    >
                      {footerlink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 xl:mt-0">
            <h4 className="mb-4 text-[22px] text-[#000000] font-bold uppercase">
                Informations
              </h4>
              <ul className="">
                {footerlinks.map((footerlink, index) => (
                  <li className="mb-[5px]" key={index}>
                    <FaAngleRight className="h-4 w-4 inline-block mr-1 -mt-0.5 text-black" />
                    <Link prefetch={false}
                      href={footerlink.slug}
                      className="text-md text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-700 transition-all font-medium"
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
      <div className="p-5 text-center bg-gray-100 border-t-[1px] border-gray-200 text-black font-medium">
        © 2021 {data ? data.allSettings.generalSettingsTitle : "Cyclewaycoffee"}.
      </div>
    </div>
  );
};

export default Footer;
