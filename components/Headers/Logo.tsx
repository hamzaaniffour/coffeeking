import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiCoffeeBeans } from "react-icons/gi";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-white">
        <GiCoffeeBeans className="h-6 w-6 text-amber-400 float-left -mt-[2px] mr-1" /> <Image
          src="https://svgur.com/i/15m5.svg"
          alt="logo"
          priority={true}
          width={140}
          height={50}
          className="mt-0.5"
        />
      </Link>
    </div>
  );
};

export default Logo;
