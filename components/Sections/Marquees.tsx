import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Marquees = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl text-black font-bold text-center mb-5">
        Featured In:
      </h2>
      <Marquee pauseOnHover className="w-full" gradient={true} gradientWidth={50} play={true}>
        <div className="flex justify-center items-center gap-10">
            <Image src="https://dev-padre.pantheonsite.io/wp-content/uploads/2024/05/aa5a87b0-7e4e-11ea-bdfd-b9950c4c15e2-e1669041528635-300x61-1.png" alt="" height={61} width={120} />
            <Image src="https://dev-padre.pantheonsite.io/wp-content/uploads/2024/05/1-the-telegraph-logo-1000-e1669041547364-300x53-1.png" alt="" height={61} width={120} />
            <Image src="https://dev-padre.pantheonsite.io/wp-content/uploads/2024/05/huffpost-logo-e1669041513450.png" alt="" height={61} width={120} />
            <Image src="https://dev-padre.pantheonsite.io/wp-content/uploads/2024/05/mashed_social-removebg-preview-e1669041497956-300x75-1.png" alt="" height={61} width={120} />
            <Image src="https://dev-padre.pantheonsite.io/wp-content/uploads/2024/05/WEK_logo-e1669041442618-300x64-1.png" alt="" height={61} width={120} />
            <Image src="https://dev-padre.pantheonsite.io/wp-content/uploads/2024/05/The-Guardian-logo-e1669041459637-300x118-1.png" alt="" height={61} width={120} className="mr-8" />
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
