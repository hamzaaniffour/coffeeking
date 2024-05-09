"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/libs/main-menu";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import { GiCoffeeBeans } from "react-icons/gi";
import { HeaderMenu } from "@/graphql/menu_items";

interface MenuItem {
  label: string;
  uri: string;
  childItems?: {
    nodes: MenuItem[];
  };
}

const Navbar = () => {
  const [sidenav, setSideNav] = useState<boolean>(false);
  const [headerMenu, setHeaderMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      const menuData = await HeaderMenu();
      setHeaderMenu(menuData);
      setLoading(false);
    };

    fetchMenuData();
  }, []);

  const handleSideNav = () => {
    setSideNav(!sidenav);
  };

  return (
    <>
      <div className="">
        <header className="mb-32">
          <nav className="bg-black flex justify-center items-center shadow w-full px-5 lg:px-0 xl:px-0 fixed top-0 z-50">
            <div className="navbar max-w-[1200px] mx-auto flex justify-center !p-0 !h-0">
              {sidenav && (
                <div className="bg-black bg-opacity-90 h-full w-full fixed top-0 left-0 z-50">
                  <div className="!w-[65%] bg-white transition-all pt-12 z-50 block shadow fixed left-0 top-0 bottom-0 h-full lg:hidden xl:hidden">
                    <ul className="pl-6">
                      {links.map((link, index) => (
                        <li className="mb-5" key={index}>
                          <Link
                            onClick={handleSideNav}
                            href={`${link.slug}`}
                            tabIndex={0}
                            className="text-xl text-black font-semibold uppercase"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={handleSideNav}
                    className="bg-black flex justify-center items-center bg-opacity-90 rounded-full h-11 w-11 cursor-pointer absolute top-5 right-5"
                  >
                    <IoCloseSharp className="text-black h-7 w-7" />
                  </button>
                </div>
              )}
              <div onClick={handleSideNav} className="block lg:hidden mr-3 cursor-pointer">
                <RiMenu2Line className="text-white h-5 w-5" />
              </div>

              <div className="navbar-start">
                <Link href="/" className="text-white">
                  <Image
                    src="https://svgur.com/i/15m5.svg"
                    alt="logo"
                    priority={true}
                    width={140}
                    height={50}
                    className="mt-0.5"
                  />
                </Link>{" "}
                <GiCoffeeBeans className="inline-block h-6 w-6 ml-0.5 text-amber-400" />
              </div>

              <div className="navbar-center hidden lg:block xl:block">
                <ul className="menu menu-horizontal px-1">
                  <div className="flex gap-6">
                    {loading
                      ? links.map((link, index) => (
                        <div key={index} className="dropdown dropdown-hover">
                          <Link href={link.slug} className="text-base uppercase font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-500 transition-all">
                            {link.title}</Link>
                        </div>
                      ))
                      : headerMenu.map((link, index) => (
                        <div key={index} className="dropdown dropdown-hover py-5">
                          <Link
                            href={link.uri}
                            className="text-base uppercase font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-500 transition-all"
                          >
                            {link.label}
                          </Link>
                          {link.childItems && link.childItems.nodes.length > 0 && (
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[9] menu p-2 px-0 shadow-xl bg-base-100 rounded-lg min-w-max mt-4"
                            >
                              {link.childItems.nodes.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subLink.uri}
                                    className="text-[15px] font-semibold py-[3px] hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-400"
                                  >
                                    {subLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                  </div>
                </ul>
              </div>

              <div className="navbar-end">
                <Link
                  href="/products"
                  className="calltoaction font-bold py-[5px] px-3 bg-[#ffe000] hover:bg-[#ffe000] transition-all text-black rounded ml-3 text-md"
                >
                  Coffee{" "}
                  <PiCoffeeBeanDuotone className="h-5 w-5 inline-block -mt-[2px]" />
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
export default Navbar;
