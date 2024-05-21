import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: {
      default: "Contact Us",
      template: "%s | Cyclewaycoffee",
    },
    description: "Please fill out the form and we'll get back to you as soon as possible.",
    twitter: {
      card: "summary_large_image",
    },
    robots: "follow, index",
  };

const ContactPage = () => {
  return (
    <div>
        <ContactForm />
    </div>
  );
};

export default ContactPage;
