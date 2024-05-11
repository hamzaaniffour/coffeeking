import React from "react";
import Image from "next/image";
import Link from "next/link";
import cyclewaycoffee from '@/public/assets/cyclewaycoffee.svg'

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-amber-400">
        <Image
          src={cyclewaycoffee}
          alt="logo"
          priority={true}
          width={220}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
