/*import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const recipes = await prisma.recipe.findMany();
    return Response.json(recipes);
}
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get("skip") || "0", 10);
    const take = parseInt(searchParams.get("take") || "6", 10);

    const recipes = await prisma.recipe.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take,
    });

    return Response.json(recipes);
}
