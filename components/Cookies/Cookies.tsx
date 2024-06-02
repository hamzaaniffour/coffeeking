"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Svg from "./Svg";

const AcceptCookiesBar: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [showBar, setShowBar] = useState<boolean>(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setAccepted(true);
    } else {
      setShowBar(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setAccepted(true);
  };

  const handleDecline = () => {
    setShowBar(false);
  };

  if (!showBar || accepted) return null;

  return (
    <section className="fixed max-w-md p-4 mx-auto z-50 bg-white shadow border border-gray-200 left-4 bottom-4 md:left-8 md:bottom-8 lg:left-8 lg:bottom-8 xl:left-8 xl:bottom-8 rounded-2xl">
      <h2 className="font-semibold text-slate-950">
        🍪 Cookie Notice
      </h2>
      <p className="mt-4 text-sm text-slate-900">
        We use cookies to ensure that we give you the best experience on our
        website.{" "}
        <Link href="/page/cookies-policy" className="text-blue-800 font-semibold hover:underline">
          Read cookies policy
        </Link>
        .{" "}
      </p>
      <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
        <button className="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none">
          Manage your preferences
        </button>
        <button onClick={handleAccept} className="text-sm bg-amber-500 font-bold rounded text-slate-950 px-4 py-2.5 duration-300 transition-colors focus:outline-none">
          Accept
        </button>
      </div>
    </section>
  );
};

function MyApp() {
  return (
    <>
      <AcceptCookiesBar />
    </>
  );
}

export default MyApp;
