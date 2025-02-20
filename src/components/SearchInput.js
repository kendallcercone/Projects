"use client";
import { useState } from "react";

const SearchInput = () => {
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-end">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="what's Cookin?"
                    className="px-3 py-2 bg-[#F8F3E8] text-[#3B3B3B] border-b-2 border-[#A06954] border-opacity-70 border-dotted focus:outline-none placeholder-[#A06954] placeholder-opacity-70 w-full mt-10"
                />
                <button
                    onClick={() => console.log("Searching for:", value)}
                    className="mx-1 px-4 py-2 border-2 border-[#E6A537] border-opacity-70 text-[#A06954] rounded-sm focus:outline-none hover:bg-[#FFEBCA] focus:border-[#A06954]"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchInput;
