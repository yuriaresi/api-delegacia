/*
  Warnings:

  - You are about to drop the column `armaId` on the `crime` table. All the data in the column will be lost.
  - You are about to drop the column `criminosoId` on the `crime` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDoCrime` on the `crime` table. All the data in the column will be lost.
  - Added the required column `arma_id` to the `crime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminoso_id` to the `crime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dt_hr_atualizacao` to the `crime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_do_crime` to the `crime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dt_hr_atualizacao` to the `criminoso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "crime" DROP COLUMN "armaId",
DROP COLUMN "criminosoId",
DROP COLUMN "tipoDoCrime",
ADD COLUMN     "arma_id" VARCHAR(255) NOT NULL,
ADD COLUMN     "criminoso_id" VARCHAR(255) NOT NULL,
ADD COLUMN     "dt_hr_atualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tipo_do_crime" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "criminoso" ADD COLUMN     "dt_hr_atualizacao" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "arma" (
    "id" TEXT NOT NULL,
    "crime_id" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "tipo" VARCHAR(60) NOT NULL,
    "numero_de_serie" VARCHAR(60),
    "marca" VARCHAR(60) NOT NULL,
    "dt_hr_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_hr_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "arma_pkey" PRIMARY KEY ("id")
);
