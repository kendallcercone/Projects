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
                        p-2 bg-[#D98262] bg-opacity-70 border-2 border-[#D98262] rounded-sm shadow-lg transition-transform transform hover:scale-105 -mx-7
                        ${getRotationClass(index)}
                        ${index === 1 ? "z-20" : "z-10"}
                        hover:z-50
                    `}
                >
                    <div className="w-48 h-72">
                        <Image
                            src={standout.image || "/placeholder.avif"}
                            alt={standout.name}
                            width={192}
                            height={288}
                            className="object-cover w-full h-full rounded-sm"
                        />
                    </div>
                    <h2 className="text-white text-center mt-2">
                        {standout.name}
                    </h2>
                </Link>
            ))}
        </div>
    );
};

export default Standouts;
