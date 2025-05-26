import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFeaturedRecipes() {
    const featuredRecipes = await prisma.recipe.findMany({
        where: { featured: true },
        orderBy: {
            createdAt: "desc",
        },
        take: 5,
    });
    return featuredRecipes;
}
