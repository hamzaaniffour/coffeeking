import React from "react";
import Image from "next/image";
import Link from "next/link";
import cyclewaycoffee from '@/public/assets/cwcv2.svg'

const Logo = () => {
  return (
    <div>
      <Link prefetch={false} href="/" className="text-amber-400">
        <Image
          src={cyclewaycoffee}
          alt="logo"
          priority={true}
          width={200}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
