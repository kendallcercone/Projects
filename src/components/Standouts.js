"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const getRotationClass = (index) => {
    const rotations = ["rotate-[-6deg]", "rotate-[4deg]", "rotate-[-6deg]"];
    return rotations[index % rotations.length];
};

const Standouts = ({ standouts }) => {
    return (
        <div className="flex justify-center items-center h-[300px]">
            {standouts.map((standout, index) => (
                <Link
                    key={standout.name}
                    href={standout.link}
                    className={`
                        group relative p-2 bg-[#D98262] border-2 border-[#D98262] rounded-sm shadow-lg transition-transform transform hover:scale-105 -mx-7
                        ${getRotationClass(index)}
                        ${index === 1 ? "z-20" : "z-10"}
                        hover:z-50
                    `}
                >
                    <div className="w-48 h-72 relative">
                        <Image
                            src={standout.image || "/placeholder.avif"}
                            alt={standout.name}
                            width={192}
                            height={288}
                            className="object-cover w-full h-full rounded-sm"
                        />
                        <h2 className="absolute bottom-0 left-0 right-0 z-1 bg-[#D98262] text-white text-center opacity-0 group-hover:opacity-100">
                            {standout.name}
                        </h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Standouts;
