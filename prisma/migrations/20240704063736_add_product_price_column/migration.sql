-- AlterTable
ALTER TABLE "audit"."ProductVersion" ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;
