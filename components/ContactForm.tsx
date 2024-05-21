import Link from "next/link";
import React from "react";
import HomeSidebar from "@/components/Sidebars/HomeSidebar";

const ContactForm = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="lg:flex gap-10">
          <div className="lg:w-9/12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold xl:text-4xl uppercase mb-4 text-black">
                Contact
              </h1>
              <div className="text-sm breadcrumbs mb-8">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Page</li>
                  <li className="font-semibold">Contact</li>
                </ul>
              </div>
              <div className="single-content text-slate-800 text-md font-medium mb-6">
                We love to hear from our readers and fellow coffee enthusiasts!
                Whether you have a question, feedback, or simply want to share
                your love for coffee, we're here to listen. Please use the
                contact form below to get in touch with us.
              </div>

              <div className="">
                <form>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-sm text-slate-900 font-medium mb-4"
                      >
                        First name:
                      </label>
                      <input
                        type="text"
                        className="w-full bg-slate-100 rounded py-4 px-5 focus:outline-none ring:outline-none text-sm text-black font-medium"
                        placeholder="Enter Your First name"
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-sm text-slate-900 font-medium mb-3"
                      >
                        Last name:
                      </label>
                      <input
                        type="text"
                        className="w-full bg-slate-100 rounded py-4 px-5 focus:outline-none ring:outline-none text-sm text-black font-medium"
                        placeholder="Enter Your Last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mb-5">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-sm text-slate-900 font-medium mb-3"
                      >
                        Address Email:
                      </label>
                      <input
                        type="email"
                        className="w-full bg-slate-100 rounded py-4 px-5 focus:outline-none ring:outline-none text-sm text-black font-medium"
                        placeholder="Enter Your Address Email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mb-5">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-sm text-slate-900 font-medium mb-3"
                      >
                        Message or Comment:
                      </label>
                      <textarea
                        className="w-full bg-slate-100 rounded max-h-[150px] min-h-[150px] py-4 px-5 focus:outline-none ring:outline-none text-sm text-black font-medium"
                        placeholder="Enter Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="py-3 px-8 bg-amber-500 rounded-md text-slate-800 transition-all hover:bg-amber-400 font-semibold">
                    Send Message <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1 inline" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#1e293b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="border-0 lg:border-r-[1px] lg:border-gray-100 xl:border-r-[2px] xl:border-gray-100"></div>
          <div className="lg:w-3/12 hidden md:hidden lg:block xl:block">
            <HomeSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
