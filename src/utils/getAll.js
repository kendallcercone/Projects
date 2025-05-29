import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllRecipes({ skip = 0, take = 6 } = {}) {
    return prisma.recipe.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take,
    });
}
