"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/libs/main-menu";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { HeaderMenu } from "@/graphql/menu_items";
import Logo from "@/components/Headers/Logo";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import Image from "next/image";
// import cyclewaycoffee from "@/public/assets/coffee-logo.svg";
// import { GiCoffeeCup } from "react-icons/gi";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import SearchPopup from "./SearchPopup";
import path from "path";
import MainSearch from "../Sections/MainSearch";
import { FaXTwitter } from "react-icons/fa6";

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
  const [searchVisible, setsearchVisible] = useState(false);

  const handleSearchPopup = () => {
    setsearchVisible(!searchVisible);
  };

  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

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

  const getURL = (uri: any) => {
    if (uri.toLowerCase().split(" ").includes("/")) {
      return uri;
    } else if (uri.includes("/category")) {
      return `${uri}`;
    } else if (uri.includes("/blog")) {
      return `${uri}`;
    } else {
      return `/page${uri}`;
    }
  };

  return (
    <>
      <div className="">
        <header className="mb-32">
          <nav className="bg-black flex justify-center items-center shadow w-full px-5 lg:px-0 xl:px-0 fixed top-0 z-50">
            <div className="navbar max-w-[1250px] mx-auto flex justify-center !p-0 !h-0">
              {sidenav && (
                <div className="bg-black bg-opacity-90 h-full w-full fixed top-0 left-0 z-50 !transition-all">
                  <div className="!w-[70%] bg-black !transition-all pt-10 z-50 block shadow fixed left-0 top-0 bottom-0 h-full lg:hidden xl:hidden">
                    <ul className="flex flex-col">
                      {headerMenu.map((link, index) => (
                        <li key={index} className="relative mb-5 pl-2">
                          <div
                            className="flex items-center justify-between"
                            onClick={() => toggleMenu(index)}
                          >
                            <Link
                              href={path.join("/", getURL(link.uri))}
                              className="text-xl uppercase outline-none outline-offset-0 font-semibold text-white px-3"
                              onClick={handleSideNav}
                            >
                              {link.label}
                            </Link>
                            {link.childItems &&
                              link.childItems.nodes.length > 0 && (
                                <button className="text-white flex justify-end items-center right-2 absolute p-[4px] h-[30px] w-[40px]">
                                  {openMenuIndex === index ? (
                                    <IoIosArrowUp className="text-amber-500 font-bold h-6 w-6" />
                                  ) : (
                                    <IoIosArrowDown className="text-amber-500 font-bold h-6 w-6" />
                                  )}
                                </button>
                              )}
                          </div>
                          {link.childItems &&
                            link.childItems.nodes.length > 0 && (
                              <ul
                                className={`${
                                  openMenuIndex === index ? "block" : "hidden"
                                } mt-3 mb-3 pl-5 pr-5`}
                              >
                                {link.childItems.nodes.map(
                                  (subLink, subIndex) => (
                                    <li key={subIndex} className="mb-1">
                                      <Link
                                        href={`/blog${subLink.uri}`}
                                        className="text-[15px] font-semibold py-[3px] block text-white"
                                        onClick={handleSideNav}
                                      >
                                        {subLink.label}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={handleSideNav}
                    className="bg-black flex justify-center border-2 border-slate-700 items-center bg-opacity-90 rounded-full h-11 w-11 cursor-pointer absolute top-5 right-5"
                  >
                    <IoCloseSharp className="text-white h-7 w-7" />
                  </button>
                </div>
              )}
              <div
                onClick={handleSideNav}
                className="block lg:hidden mr-3 cursor-pointer"
              >
                <RiMenu2Line className="text-white h-5 w-5" />
              </div>

              <div className="navbar-start">
                <Logo />
              </div>

              <div className="navbar-center hidden lg:block xl:block">
                <ul className="menu menu-horizontal px-1 flex gap-0">
                  {loading
                    ? links.map((link, index) => (
                        <li key={index} className="dropdown dropdown-hover">
                          <Link
                            href={link.slug}
                            className="text-base uppercase outline-none outline-offset-0 font-semibold text-white px-3"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))
                    : headerMenu.map((link, index) => (
                        <li
                          key={index}
                          className="dropdown dropdown-hover py-5"
                        >
                          <Link
                            href={getURL(link.uri)}
                            className="text-base uppercase outline-none outline-offset-0 font-semibold text-white px-3"
                          >
                            {link.label}
                          </Link>
                          {link.childItems &&
                            link.childItems.nodes.length > 0 && (
                              <ul
                                tabIndex={0}
                                className="dropdown-content z-[9] menu p-2 py-3 px-0 shadow-xl bg-black rounded-lg min-w-max mt-4"
                              >
                                {link.childItems.nodes.map(
                                  (subLink, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={`/blog${subLink.uri}`}
                                        className="text-[15px] text-slate-100 font-semibold py-[6px]"
                                      >
                                        <FaAngleRight className="h-5 w-5 inline-block text-amber-400 -mr-2" />{" "}
                                        {subLink.label}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                        </li>
                      ))}
                </ul>
              </div>

              <div className="navbar-end">
                <ul className="flex justify-center items-center gap-3">
                  <li className="">
                    <Link href="https://www.facebook.com" target="_blank">
                      <FaFacebookF className="text-white h-5 w-5 inline-block" />
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://www.instagram.com" target="_blank">
                      <FaInstagram className="text-white h-5 w-5 inline-block" />
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://www.pinterest.com" target="_blank">
                      <FaPinterestP className="text-white h-5 w-5 inline-block" />
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://www.x.com" target="_blank">
                      <FaXTwitter className="text-white h-5 w-5 inline-block" />
                    </Link>
                  </li>
                  {/* <li className="ml-2">
                    <button
                      onClick={handleSearchPopup}
                      aria-labelledby="Search"
                    >
                      <BiSearch className="text-amber-400 h-5 w-5 inline-block" />
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* {searchVisible && (
        <div className="bg-slate-100 bg-opacity-95 fixed top-0 left-0 w-full h-full z-50 py-5">
          <MainSearch />
        </div>
      )} */}
    </>
  );
};
export default Navbar;
