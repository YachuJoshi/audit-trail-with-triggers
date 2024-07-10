-- AlterTable
ALTER TABLE "audit"."OrderVersion" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING';
