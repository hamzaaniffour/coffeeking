"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SideMailing = () => {
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  const sendEmail = () => {
    setLoading(true);

    fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          router.push("/thank-u-for-subscribing");
        }
        return response.json();
      })
      .then((data) => setResult(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div
        className="relative w-full h-auto bg-[#2c3644] mb-6 p-5 rounded-xl"
        style={{
          backgroundImage:
            "url(https://nakib4tech.com/wp-content/uploads/2023/05/mail-icon-trans.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "108% -20px",
        }}
      >
        <h3 className="text-xl text-white font-bold mb-2">Our Mailing List</h3>
        <div className="h-0.5 w-[100px] bg-amber-400 mb-2"></div>
        <p className="text-slate-500 text-md mb-4 font-medium leading-6">
          Get great content delivered straight to your inbox.
        </p>
        <label className="input input-bordered bg-[#404c5d] rounded-md text-slate-300 font-medium flex items-center gap-2 mb-3">
          <input
            type="text"
            className="grow text-[#808c9c]"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <button
          onClick={sendEmail}
          className="bg-amber-400 text-slate-800 rounded-md w-full py-2.5 font-bold"
        >
          Get updates
        </button>
      </div>
    </div>
  );
};

export default SideMailing;
