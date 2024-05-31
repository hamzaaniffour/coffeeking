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
    <div>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <span className="text-black font-semibold mb-4 text-2xl">
          What's Inside?🧐
        </span>
        {showContent ? (
          <FaAngleUp className="text-2xl text-amber-500" />
        ) : (
          <FaAngleDown className="text-2xl text-amber-500" />
        )}
      </div>
      <div
        className={`${
          showContent ? "block" : "hidden"
        } border-b-2 border-slate-100 p-3 rounded-xl bg-slate-50`}
        style={{ paddingBottom: "-0.25rem" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Toggle;
