/*
  Warnings:

  - A unique constraint covering the columns `[playerDisplayName]` on the table `table_players` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playerDisplayName` to the `table_players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table_players" ADD COLUMN     "playerDisplayName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "table_players_playerDisplayName_key" ON "table_players"("playerDisplayName");
