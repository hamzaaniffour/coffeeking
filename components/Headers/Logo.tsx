import React from "react";
import Image from "next/image";
import Link from "next/link";
import cyclewaycoffee from '@/public/assets/coffee-logo.svg'

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-amber-400">
        <Image
          src={cyclewaycoffee}
          alt="logo"
          priority={true}
          width={190}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
