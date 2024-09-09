-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "highScore" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_players" (
    "walletAddress" TEXT NOT NULL,
    "telegramUserName" TEXT NOT NULL,
    "gamePoints" INTEGER NOT NULL,
    "bestScore" INTEGER NOT NULL,
    "cumulativePoints" INTEGER NOT NULL,
    "teamId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "table_players_pkey" PRIMARY KEY ("walletAddress")
);

-- CreateIndex
CREATE UNIQUE INDEX "Score_wallet_address_key" ON "Score"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "table_players_walletAddress_key" ON "table_players"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "table_players_telegramUserName_key" ON "table_players"("telegramUserName");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_wallet_address_fkey" FOREIGN KEY ("wallet_address") REFERENCES "table_players"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;
