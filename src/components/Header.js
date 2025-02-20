"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage ? (
    <div className="w-full max-w-[1200px] mx-auto px-5 transition-all duration-500 ease-in-out">
      <Image
        src="/hero.png"
        alt="Kendall Cooks"
        width={1200}
        height={600}
        className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
      />
      <div className="inline-flex flex-wrap gap-2 font-bold w-full text-sm ">
        <Link
          href="/recipes"
          className="text-[#3B3B3B] opacity-70 hover:text-[#8B9B80] hover:opacity-100"
        >
          recipes
        </Link>
        <Link
          href="/search"
          className="text-[#3B3B3B] opacity-70 hover:text-[#8B9B80] hover:opacity-100"
        >
          search
        </Link>
        <Link
          href="/shop"
          className="text-[#3B3B3B] opacity-70 hover:text-[#8B9B80] hover:opacity-100"
        >
          shop
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex flex-row m-2">
      <div>
        <Link href="/">
          <Image
            src="/hero.png"
            alt="hero logo"
            width={1200}
            height={600}
            className="w-[200px] h-auto mx-5"
          />
        </Link>
      </div>
      <div className="flex gap-6 my-2">
        <Link
          href="/recipes"
          className="text-[#3B3B3B] font-bold opacity-70 hover:text-[#8B9B80] hover:opacity-100"
        >
          recipes
        </Link>
        <Link
          href="/search"
          className="text-[#3B3B3B] font-bold opacity-70 hover:text-[#8B9B80] hover:opacity-100"
        >
          search
        </Link>
        <Link
          href="/shop"
          className="text-[#3B3B3B] font-bold opacity-70 hover:text-[#8B9B80] hover:opacity-100"
        >
          shop
        </Link>
      </div>
    </div>
  );
};

export default Header;
