-- AlterTable
ALTER TABLE "Posting" ADD COLUMN     "expiresAt" TIMESTAMP(3),
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "salary" DROP NOT NULL;
