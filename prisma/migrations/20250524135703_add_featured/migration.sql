-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "published" SET DEFAULT false;
