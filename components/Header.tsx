import React from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export default function Header() {
  return (
    <section className={inter.className + " "}>
      <header className="w-100 bg bg-[url('/images/navbar_photo.png')] bg-cover bg-right-bottom pb-10 text-neutral-800 sm:bg-bottom lg:h-screen">
        <Nav />

        <div className="container mt-28 flex flex-col gap-x-14 lg:flex-row">
          <div id="hero-text" className="w-full text-white">
            <h2 className="mb-4 text-6xl font-extralight leading-[1.1] tracking-tight text-white">
              <span className="bg-cyan-800 bg-opacity-40 sm:bg-inherit">
                Now <br /> Its easy for you <br />
                to transport
              </span>
            </h2>
            <p className="font mb-4 w-60 text-lg text-gray-200 sm:w-[600px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts. Bu yangi matn.
            </p>

            <div className="font-extralight">
              <span> &#9658; — Easy steps for renting a car</span>
            </div>
          </div>

         {/* <TruckSelect /> */}
        </div>
      </header>
    </section>
  );
};

