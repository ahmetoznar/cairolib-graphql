-- CreateEnum
CREATE TYPE "NETWORKS" AS ENUM ('GOERLI', 'MAINNET');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('STAKING', 'AMM', 'TOKEN_STANDARTS', 'NFT', 'DAO', 'PROXY_CONTRACTS', 'VESTING', 'ARRAY_MANIPULATIONS', 'MULTI_CALLS', 'ON_CHAIN_VERIFICATION', 'PROOVER', 'TIME_LOCKERS', 'MULTI_SIG', 'DEFI', 'ACCESS_CONTROL', 'MATH', 'IDO', 'LENDING_BORROW');

-- CreateTable
CREATE TABLE "Config" (
    "uuid" TEXT NOT NULL,
    "totalLinesOfCode" INTEGER NOT NULL,
    "last_index" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Author" (
    "wallet_address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,
    "website_link" TEXT NOT NULL,
    "author_image" TEXT NOT NULL DEFAULT 'author-image-56823968236.jpg',
    "register_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_submit_date" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("wallet_address")
);

-- CreateTable
CREATE TABLE "ContractId" (
    "uuid" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "authorUuid" TEXT NOT NULL,

    CONSTRAINT "ContractId_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "File" (
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_audited" BOOLEAN NOT NULL,
    "cairo_version" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "authorUuid" TEXT NOT NULL,
    "categories" "Category"[],

    CONSTRAINT "File_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "FileSublink" (
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileUuid" TEXT NOT NULL,

    CONSTRAINT "FileSublink_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "DeployedContract" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "network" "NETWORKS" NOT NULL,
    "is_audited" BOOLEAN NOT NULL,
    "authorUuid" TEXT NOT NULL,

    CONSTRAINT "DeployedContract_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_wallet_address_key" ON "Author"("wallet_address");

-- AddForeignKey
ALTER TABLE "ContractId" ADD CONSTRAINT "ContractId_authorUuid_fkey" FOREIGN KEY ("authorUuid") REFERENCES "Author"("wallet_address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_authorUuid_fkey" FOREIGN KEY ("authorUuid") REFERENCES "Author"("wallet_address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileSublink" ADD CONSTRAINT "FileSublink_fileUuid_fkey" FOREIGN KEY ("fileUuid") REFERENCES "File"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeployedContract" ADD CONSTRAINT "DeployedContract_authorUuid_fkey" FOREIGN KEY ("authorUuid") REFERENCES "Author"("wallet_address") ON DELETE RESTRICT ON UPDATE CASCADE;
