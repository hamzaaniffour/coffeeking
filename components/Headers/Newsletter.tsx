"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Newsletter = () => {
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
      <div className="join mt-3">
        <input
          className="input bg-slate-100 border-none join-item hover:outline-none focus:outline-none ring:outline-none"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <button
          className="btn join-item border-none bg-amber-400 rounded-r-md font-bold"
          onClick={sendEmail}
        >
          Subscribe
        </button>
      </div>
      <p className="text-sm text-slate-600 mt-2 max-w-[280px]">
        We will not send you spam. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;
