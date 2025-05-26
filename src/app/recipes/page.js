import Cards from "../../components/Cards";
import React from "react";
import { getRecentRecipes } from "../../utils/getRecent";
import { getFeaturedRecipes } from "../../utils/getFeatured";


const Recipes = async () => {

  const recentRecipes = await getRecentRecipes();
  const featuredRecipes = await getFeaturedRecipes();

    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold">Recipes</h2>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Featured Recipes</h3>
                <Cards cards={featuredRecipes} />
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Recent Recipes</h3>
                <Cards cards={recentRecipes} />
            </div>
        </div>
    );
};

export default Recipes;
