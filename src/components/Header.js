"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
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
    );
};

export default Header;
