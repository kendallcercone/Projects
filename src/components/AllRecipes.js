"use client";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [shown, setShown] = useState(6);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`/api/recipes?take=${shown}`)
            .then((res) => res.json())
            .then(setRecipes);
    }, [shown]);

    const handleMore = async () => {
        setLoading(true);
        const res = await fetch(`/api/recipes?skip=${recipes.length}&take=12`);
        const moreRecipes = await res.json();
        setRecipes((prev) => [...prev, ...moreRecipes]);
        setShown(shown + 12);
        setLoading(false);
    };

    return (
        <div>
            <Cards cards={recipes} />
            <button
                className="mt-4 px-4 py-2 bg-[#D98262] text-white rounded"
                onClick={handleMore}
                disabled={loading}
            >
                {loading ? "Loading..." : "More"}
            </button>
        </div>
    );
}
