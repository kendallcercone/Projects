import React from "react";
import { getRecipeByLink } from "../../../utils/getRecipeByLink";
import Image from "next/image";

const Recipe = async ({ params }) => {
    const { recipe: link } = params;
    const recipe = await getRecipeByLink(link);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="p-4">
            <div className="border-b border-[#D98262]">
                <h1 className="text-4xl font-bold">{recipe.title}</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full items-stretch">
                <div className="flex flex-col w-full md:w-3/4 border border-[#A06954] mr-4 mt-6">
                    <div className="flex flex-col flex-1">
                        <div className="flex w-full flex-col-reverse sm:flex-row">
                            <div className="w-full md:w-2/3">
                                <div className="pt-2">
                                    <h2 className="text-2xl font-semibold text-[#3B3B3B] m-2 border-b border-[#3B3B3B]">
                                        Ingredients
                                    </h2>
                                </div>
                                <ul className="px-6 list-disc list-inside">
                                    {recipe.ingredients
                                        .split(";")
                                        .map((ingredient, idx) => (
                                            <li key={idx}>
                                                {ingredient.trim()}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="flex justify-center lg:w-1/3 m-6">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    width={256}
                                    height={256}
                                    className="w-64 h-64 object-cover border-2 border-[#A06954]"
                                />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-[#3B3B3B] m-2 border-b border-[#3B3B3B]">
                            Steps
                        </h2>
                        <ol className="px-6 list-decimal list-inside">
                            {recipe.steps.split(";").map((step, idx) => (
                                <li className="py-1" key={idx}>
                                    {step.trim()}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="w-full md:w-1/4 bg-[#D98262] opacity-75 flex-1 flex mt-6">
                    <div className="w-full h-full flex items-center justify-center"></div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
