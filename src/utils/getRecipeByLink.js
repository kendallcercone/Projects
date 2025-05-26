import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRecipeByLink(link) {
    console.log("Fetching recipe with link:", link);
    const recipe = await prisma.recipe.findUnique({
        where: {
            link: `recipes/${link}`,
        },
    });
    console.log("Fetched recipe:", recipe);
    return recipe;
}
