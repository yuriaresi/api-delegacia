/*
  Warnings:

  - The primary key for the `arma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `crime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `criminoso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `arma` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `crime` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `criminoso` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "arma" DROP CONSTRAINT "arma_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "arma_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "crime" DROP CONSTRAINT "crime_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "crime_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "criminoso" DROP CONSTRAINT "criminoso_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "criminoso_pkey" PRIMARY KEY ("id");
