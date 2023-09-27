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
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Udemy Clone</h1>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Courses
          </a>
          <a href="#" className="hover:underline">
            Categories
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

