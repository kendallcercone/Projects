"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cards = ({ cards }) => {
    return (
        <div className="flex">
            {cards.map((card) => (
                <Link
                    key={card.id}
                    href={card.link}
                    className="group p-1 bg-[#D98262] bg-opacity-70 border-2 border-[#D98262] rounded-sm shadow-md transition-transform transform hover:scale-105 m-2 w-[150px]"
                >
                    <div className="w-full aspect-square">
                        <Image
                            src={card.image || "/placeholder.avif"}
                            alt={card.title}
                            width={100}
                            height={100}
                            className="mx-auto object-cover w-full h-36 rounded-sm"
                        />
                    </div>
                    <div className="flex items-center justify-center w-fullpx] h-10">
                        <p
                            className="
                                text-center text-xs sm:text-sm md:text-md font-bold text-[#A06954]
                                line-clamp-1 group-hover:line-clamp-none
                                transition-all duration-200
                            "
                        >
                            {card.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
