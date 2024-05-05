import React from "react";
import Image from "next/image";

const HomeSidebar = () => {
  return (
    <div className="sticky top-[80px]">
      <h1 className="text-black">
        <Image
          src="/assets/annonce.png"
          alt="Annonce"
          width={400}
          height={300}
          className="rounded"
          layout="responsive"
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={80}
          placeholder="blur"
          blurDataURL="/assets/annonce.png"
        />
      </h1>
    </div>
  );
};

export default HomeSidebar;
