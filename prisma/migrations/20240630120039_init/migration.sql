/*
  Warnings:

  - You are about to drop the column `telegramUserName` on the `table_players` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telegramHandle]` on the table `table_players` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telegramHandle` to the `table_players` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "table_players_telegramUserName_key";

-- AlterTable
ALTER TABLE "table_players" DROP COLUMN "telegramUserName",
ADD COLUMN     "telegramHandle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "table_players_telegramHandle_key" ON "table_players"("telegramHandle");
