"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Categories = ({ categories }) => {
    return (
        <div className="flex">
            {categories.map((category) => (
                <Link key={category.name} href={category.link} className="">
                    <div className="cursor-pointer p-3 bg-[#D98262] bg-opacity-70 border-2 border-[#D98262] text-center rounded-sm shadow-md transition-transform transform hover:scale-105 m-2 w-48">
                        <Image
                            src="/placeholder.avif"
                            alt={category.name}
                            width={100}
                            height={100}
                            className="mx-auto object-cover w-full h-full"
                        />
                        <p className="text-xs sm:text-sm md:text-md xl:text-lg font-bold mt-2 text-[#A06954]">
                            {category.name}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Categories;
