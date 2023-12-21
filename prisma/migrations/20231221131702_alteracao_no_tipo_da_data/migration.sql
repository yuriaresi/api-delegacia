/*
  Warnings:

  - Changed the type of `data` on the `crime` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "crime" DROP COLUMN "data",
ADD COLUMN     "data" VARCHAR(10) NOT NULL;
