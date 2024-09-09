/*
  Warnings:

  - A unique constraint covering the columns `[referralCode]` on the table `table_players` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `referralCode` to the `table_players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table_players" ADD COLUMN     "referralCode" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "referrals" (
    "id" SERIAL NOT NULL,
    "giverWalletAddress" TEXT NOT NULL,
    "receiverWalletAddress" TEXT NOT NULL,
    "referralPoints" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "table_players_referralCode_key" ON "table_players"("referralCode");

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_giverWalletAddress_fkey" FOREIGN KEY ("giverWalletAddress") REFERENCES "table_players"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_receiverWalletAddress_fkey" FOREIGN KEY ("receiverWalletAddress") REFERENCES "table_players"("walletAddress") ON DELETE CASCADE ON UPDATE CASCADE;
