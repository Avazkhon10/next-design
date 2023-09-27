// pages/index.tsx
import Image from "next/image"
import Head from "next/head"
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import React from "react";
import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";

// const Home: React.FC = () => {
//   return (
//     <div>
//       <Homepage />
//     </div>
//   );
// };

// export default Home;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Delog.uz </title>
      </Head>
      <div className={inter.className}>
        <Homepage />
        <Footer />
      </div>
    </>
  );
}