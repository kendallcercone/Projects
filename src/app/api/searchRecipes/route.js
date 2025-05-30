import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";

    if (!q) return Response.json([]);

    const recipes = await prisma.recipe.findMany({
        where: {
            OR: [
                { title: { contains: q, mode: "insensitive" } },
                { ingredients: { contains: q, mode: "insensitive" } },
            ],
        },
        orderBy: { createdAt: "desc" },
        take: 20,
    });

    return Response.json(recipes);
}
