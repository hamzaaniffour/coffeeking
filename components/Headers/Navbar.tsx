"use client";
import { useState } from "react";
import Link from "next/link";
import { links } from "@/libs/main-menu";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { PiCoffeeBeanDuotone, PiCoffeeLight } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { GiCoffeeBeans } from "react-icons/gi";

const Navbar = () => {
  const [sidenav, setSideNav] = useState<boolean>(false);

  const handleSideNav = () => {
    setSideNav(!sidenav);
  };

  return (
    <>
      <div className="">
        <header className="mb-32">
          <nav className="bg-white flex justify-center items-center shadow w-full px-5 lg:px-0 xl:px-0 fixed top-0 z-50">
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
                    className="bg-white flex justify-center items-center bg-opacity-90 rounded-full h-11 w-11 cursor-pointer absolute top-5 right-5"
                  >
                    <IoCloseSharp className="text-black h-7 w-7" />
                  </button>
                </div>
              )}
              <button onClick={handleSideNav} className="block lg:hidden mr-3">
                <RiMenu2Line className="text-black h-5 w-5" />
              </button>

              <div className="navbar-start">
                <Link href="/">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05My4yOTMuNzc4Yy0zLjI0MyAwLTYuNDEzIDIuODA1LTYuNzc3IDYuODU4VjEuMTEyaC00LjY1N3YxOS42NzFoNC43MTR2LTkuNTIxYzAtMi42NjcgMS45NzktNi40MyA2LjcyLTYuNDNWLjc3OFptNDkuNDg1IDE2Ljg1NlY0LjE1N2gyLjczMWMzLjY0MSAwIDYuNTk5IDIuMTc0IDYuNTk5IDYuNjMgMCA0LjQ1Ni0yLjk1OCA2Ljg0Ny02LjU5OSA2Ljg0N2gtMi43MzFabS00LjY2NSAzLjE1Mmg3Ljk2NWM0Ljg5MiAwIDEwLjkyMi0zLjA0MyAxMC45MjItOS45OTkgMC02Ljg0Ny02LjAzLTkuNjczLTEwLjkyMi05LjY3M2gtNy45NjV2MTkuNjcyWm0tMTcuODg5LTkuNzhjMC0zLjU4NyAxLjkzNC02LjUyMSA1LjEyLTYuNTIxIDMuMDcyIDAgNC43NzkgMi45MzQgNC43NzkgNi41MiAwIDMuNTg3LTEuNzA3IDYuNTIyLTQuNzc5IDYuNTIyLTMuMTg2IDAtNS4xMi0yLjkzNS01LjEyLTYuNTIxWm0tNC43NzkuMjE3YzAgNS44NjkgMy4xODYgOS45OTkgOC4xOTIgOS45OTkgMy42NDEgMCA1LjgwMy0yLjI4MiA2Ljk0MS01Ljk3OHY1LjU0M2g0LjY2NFYxLjExNmgtNC42NjR2NS4yMTZDMTI5LjU1NCAyLjg1NSAxMjcuMzkyLjc5IDEyMy45NzkuNzljLTUuMTIgMC04LjUzNCA0LjQ1Ni04LjUzNCAxMC40MzNaTTkuMjE2IDIxLjIyMkMzLjQxMyAyMS4yMjIgMCAxNi43NjYgMCAxMS4yMjMgMCA1LjQ2MyAzLjc1NS43OSAxMC45MjMuNzljNy4zOTUgMCA5Ljg5OCA0Ljc4MiAxMC4wMTIgNy40OTloLTUuMzQ3Yy0uMTE0LTEuNTIyLTEuNDgtMy44MDQtNC43OC0zLjgwNC0zLjUyNiAwLTUuODAyIDIuOTM0LTUuODAyIDYuNTIgMCAzLjU4NyAyLjI3NiA2LjUyMiA1LjgwMyA2LjUyMiAzLjE4NiAwIDQuNTUxLTIuMzkxIDUuMTItNC43ODJoLTUuMTJ2LTEuOTU3aDEwLjc0M3YxMEgxNi44NHYtNi4zMDRjLS4zNDEgMi4yODItMS44MiA2LjczOC03LjYyMyA2LjczOFptMjEuODkyLS4wMDJjLTQuNDM3IDAtNy4xNjgtMi44MjUtNy4xNjgtOC40NzdWMS4xMTRoNC43Nzl2MTEuNjNjMCAyLjkzNCAxLjQ3OSA0LjM0NyAzLjk4MiA0LjM0NyA0Ljg5MiAwIDYuNzEzLTUuNzYgNi43MTMtOS43ODJWMS4xMTRoNC43Nzh2MTkuNjcyaC00LjY2NHYtNy4yODJjLS45MSA0LjAyMS0zLjQxNCA3LjcxNy04LjQyIDcuNzE3Wk03Mi43NDEuNzc4Yy00LjA3NyAwLTYuNjQ5IDMuNzYyLTcuNDg4IDcuMjQtLjE0NC00LjY2LTIuNTQ0LTcuMjQtNi4zODMtNy4yNC0zLjMxOCAwLTYuMzk2IDIuODI2LTcuMTk1IDcuMjk3VjEuMTEzaC00LjY1OHYxOS42NzJoNC43MTh2LTcuMDUyYzAtMS43NDkuNzYzLTguOTI0IDUuNTEyLTguOTI0IDMuMDc3IDAgMy4zOTggMi42NTEgMy4zOTggNi4yNzV2OS43MDFoNC43MTZ2LTcuMDUyYzAtMS43NDkuNzk0LTguOTI0IDUuNTQ0LTguOTI0IDMuMDc0IDAgMy4zOTIgMi42NTEgMy4zOTIgNi4yNzV2OS43MDFoNC43MjJWOS4xNWMuMDIyLTUuNTgyLTIuMDQyLTguMzctNi4yNzgtOC4zN1ptMzAuNjc0IDBDOTcuMzA2Ljc3OCA5My4xNjggNS4zNTMgOTMuMTY4IDExYzAgNi4yMjEgMy45MzYgMTAuMjIgMTAuMjQ3IDEwLjIyIDYuMTA4IDAgMTAuMzItNC41NzQgMTAuMzItMTAuMjIgMC02LjIyMi00LjAxMy0xMC4yMjItMTAuMzItMTAuMjIyWm0wIDE2Ljk2Yy0zLjU1NiAwLTUuODYtMi44NzUtNS44Ni02LjczOCAwLTMuODY0IDIuMzEyLTYuNzQgNS44Ni02Ljc0IDMuNTQ3IDAgNS43NjYgMi44NzYgNS43NjYgNi43NCAwIDMuODYzLTIuMjIxIDYuNzM5LTUuNzY2IDYuNzM5WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
                    alt="logo"
                    priority={true}
                    width={140}
                    height={50}
                    className="mt-0.5"
                  />
                </Link> <GiCoffeeBeans className="inline-block h-6 w-6 ml-0.5" />
              </div>

              <div className="navbar-center hidden lg:block xl:block">
                <ul className="menu menu-horizontal px-1">
                  <div className="flex gap-5">
                    {links.map((link, index) => (
                      <div key={index} className="dropdown dropdown-hover">
                        <Link
                          href={link.slug}
                          className="text-base uppercase font-semibold text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-500 transition-all"
                        >
                          {link.title}
                        </Link>
                        {link.children && (
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[9] menu p-2 px-0 shadow-xl bg-base-100 rounded-lg min-w-[200px]"
                          >
                            {link.children.map((subLink) => (
                              <li key={subLink.id}>
                                <Link
                                  href={subLink.slug}
                                  className="text-[17px] font-semibold py-[6px] hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-400"
                                >
                                  {subLink.title}
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
