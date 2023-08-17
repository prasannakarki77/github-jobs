/*
  Warnings:

  - You are about to drop the column `salary` on the `Posting` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Posting" DROP CONSTRAINT "Posting_userId_fkey";

-- DropIndex
DROP INDEX "Posting_userId_key";

-- AlterTable
ALTER TABLE "Posting" DROP COLUMN "salary";

-- AddForeignKey
ALTER TABLE "Posting" ADD CONSTRAINT "Posting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
