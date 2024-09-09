/*
  Warnings:

  - You are about to drop the column `playerDisplayName` on the `table_players` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "table_players_playerDisplayName_key";

-- AlterTable
ALTER TABLE "table_players" DROP COLUMN "playerDisplayName";
