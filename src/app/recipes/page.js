import Cards from "../../components/Cards";
import React from "react";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getRecentRecipes() {
    // Query for the recipes from the database where they are published
    const allRecipes = await prisma.recipe.findMany({
        where: { published: true }, // Assuming you have a published field
        orderBy: {
            createdAt: "desc", // Sort by createdAt in descending order
        },
        take: 5, // Limit the results to 5 most recent
    });
console.log("Fetched Recipes:", allRecipes);    return allRecipes;
}

const categories = [
    { id: "1", title: "from scratch", link: "categories/from-scratch" },
    { id: "2", title: "breakfast", link: "categories/breakfast" },
    { id: "3", title: "bread", link: "categories/bread" },
    { id: "4", title: "dinner", link: "categories/dinner" },
    { id: "5", title: "lunch", link: "categories/lunch" },
    { id: "6", title: "snacks", link: "categories/snacks" },
    { id: "7", title: "soups", link: "categories/soups" },
    { id: "8", title: "sweets", link: "categories/sweets" },
];

const Recipes = async () => {
    const recipes = await getRecentRecipes();

    return (
        <div className="">
            <h2 className="text-4xl">Recipes</h2>
            <div className="mt-10 overflow-x-scroll flex flex-row flex-nowrap w-full">
                <Cards cards={categories} />
            </div>
            <div>
                <h3 className="mt-10 text-2xl">Featured</h3>
            </div>
            <div>
                <h3 className="mt-10 text-2xl">Recent</h3>
                <Cards cards={recipes} />
            </div>
        </div>
    );
};

export default Recipes;
