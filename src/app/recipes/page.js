import Cards from "../../components/Cards";
import React from "react";
import { fetchFlickrImages } from "../../utils/flickr";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch recent recipes from the database
async function getRecentRecipes() {
    const allRecipes = await prisma.recipe.findMany({
        where: { published: true },
        orderBy: {
            createdAt: "desc",
        },
        take: 5,
    });
    return allRecipes;
}

const Recipes = async () => {
    // Fetch Flickr images
    const flickrCards = await fetchFlickrImages("recipes", 10);

    // Fetch recent recipes from the database
    const recentRecipes = await getRecentRecipes();

    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold">Recipes</h2>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Featured Recipes</h3>
                <Cards cards={flickrCards} />
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Recent Recipes</h3>
                <Cards cards={recentRecipes} />
            </div>
        </div>
    );
};

export default Recipes;
