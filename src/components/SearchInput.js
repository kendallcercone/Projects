/* "use client";
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
                    placeholder="what's cookin?"
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
*/

"use client";
import { useState } from "react";
import Link from "next/link";

const SearchInput = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setSearched(true);
        const res = await fetch(
            `/api/searchRecipes?q=${encodeURIComponent(value)}`
        );
        const data = await res.json();
        setResults(data);
        setLoading(false);
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-end">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    placeholder="what's cookin?"
                    className="px-3 py-2 bg-[#F8F3E8] text-[#3B3B3B] border-b-2 border-[#A06954] border-opacity-70 border-dotted focus:outline-none placeholder-[#A06954] placeholder-opacity-70 w-full mt-10"
                />
                <button
                    onClick={handleSearch}
                    className="mx-1 px-4 py-2 border-2 border-[#E6A537] border-opacity-70 text-[#A06954] rounded-sm focus:outline-none hover:bg-[#FFEBCA] focus:border-[#A06954]"
                    disabled={loading}
                >
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>
            <div className="mt-4">
                {results.length > 0 && (
                    <ul className="flex flex-col gap-y-3">
                        {results.map((recipe) => (
                            <Link
                                key={recipe.id}
                                href={recipe.link}
                                className="block"
                            >
                                <li className="bg-white border rounded shadow p-3">
                                    <span className="font-bold">
                                        {recipe.title}
                                    </span>
                                    <div className="text-xs text-gray-500 truncate">
                                        {recipe.ingredients}
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
                {results.length === 0 && searched && !loading && (
                    <div className="text-sm text-gray-500">
                        No recipes found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchInput;
