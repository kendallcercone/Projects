/*
  Warnings:

  - Added the required column `image` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL;
