/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recipe_link_key" ON "Recipe"("link");
