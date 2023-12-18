/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `criminoso` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "crime" (
    "id" TEXT NOT NULL,
    "criminosoId" VARCHAR(255) NOT NULL,
    "armaId" VARCHAR(255) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" VARCHAR(255) NOT NULL,
    "tipoDoCrime" VARCHAR(100) NOT NULL,
    "descricao" TEXT NOT NULL,
    "dt_hr_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "crime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "criminoso_cpf_key" ON "criminoso"("cpf");
