import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const recipes = await prisma.recipe.findMany();
    return Response.json(recipes);
}
