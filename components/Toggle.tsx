"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface ToggleProps {
  children: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="border-b-2 border-slate-100 p-3 px-5 rounded-xl bg-slate-100">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <span className="text-black font-semibold text-lg">
          What&#39;s Inside?🧐
        </span>
        {showContent ? (
          <FaAngleUp className="text-2xl ml-1.5 relative text-amber-500" />
        ) : (
          <FaAngleDown className="text-2xl ml-1.5 relative text-amber-500" />
        )}
      </div>
      <div
        className={`${
          showContent ? "block" : "hidden"
        } mt-4`}
        style={{ paddingBottom: "-0.25rem" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Toggle;
