import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Fetch recent recipes from the database
export async function getRecentRecipes() {
    const recentRecipes = await prisma.recipe.findMany({
        where: { published: true },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    });
    return recentRecipes;
}
