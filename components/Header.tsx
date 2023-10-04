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
      <header className="w-100 bg-[url('/images/navbar_photo.png')] bg-cover bg-right-bottom pb-10 text-neutral-800 sm:bg-bottom lg:h-screen">
        <Nav />

        <div className="container mt-28 ml-20 flex flex-col gap-x-14 lg:flex-row">
          <div id="hero-text" className="w-full text-white">
            <h2 className="mb-4 text-6xl font-bold leading-[1.1] tracking-tight text-black">
              <span className="bg-cyan-800 bg-opacity-40 sm:bg-inherit">
                Learn with Notes!
              </span>
            </h2>
            <p className="text-xl mb-4 w-60 text-black sm:w-[600px]">
              Learn with all senses! Get started with us 
            </p>
          </div>

         {/* <TruckSelect /> */}
        </div>
      </header>
    </section>
  );
};

