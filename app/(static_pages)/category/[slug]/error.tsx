"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function error() {
  const router = useRouter();

  router.push("/not-found");

  return <></>;
}
