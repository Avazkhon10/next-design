// pages/index.tsx
import Image from "next/image"
import Head from "next/head"
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Delog.uz </title>
      </Head>
      <div className={inter.className}>
        <Header />
        <Footer />
      </div>
    </>
  );
}