"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cards = ({ cards }) => {
    return (
        <div className="flex h-full">
            {cards.map((card) => (
                <Link
                    key={card.name}
                    href={card.link}
                    className="p-2 bg-[#D98262] bg-opacity-70 border-2 border-[#D98262] rounded-sm shadow-md transition-transform transform hover:scale-105 m-2 w-32 "
                >
                    <div className="w-full aspect-square">
                        <Image
                            src="/placeholder.avif"
                            alt={card.name}
                            width={100}
                            height={100}
                            className="mx-auto object-cover w-full h-full rounded-sm"
                        />
                    </div>
                    <div>
                        <p className="flex items-center justify-center text-center h-full text-xs sm:text-sm md:text-md font-bold text-[#A06954]">
                            {card.name}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
