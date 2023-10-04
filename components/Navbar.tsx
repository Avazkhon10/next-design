// components/Header.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex list-none flex-col space-y-2 text-lg font-light font-medium text-gray-500 text-white dark:text-gray-400 sm:flex-row sm:space-x-6 sm:space-y-0">
      <li>
        <Link href="#">Explore</Link>
      </li>
      <li>
        <Link href="#">Pricing</Link>
      </li>
      <li>
        <Link href="/about">Blog</Link>
      </li>
      <li>
        <Link href="/about">Contacts</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </div>
  );
}
