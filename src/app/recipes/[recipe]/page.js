import React from "react";
import { getRecipeByLink } from "../../../utils/getRecipeByLink";

const Recipe = async ({ params }) => {
    const { recipe: link } = await params; // Extract the `link` from the URL
    const recipe = await getRecipeByLink(link);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold">{recipe.title}</h1>
            <p className="mt-4 text-lg">{recipe.description}</p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Ingredients</h2>
                <p>{recipe.ingredients}</p>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Steps</h2>
                <p>{recipe.steps}</p>
            </div>
            <div className="mt-6">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="rounded-md"
                />
            </div>
        </div>
    );
};

export default Recipe;
