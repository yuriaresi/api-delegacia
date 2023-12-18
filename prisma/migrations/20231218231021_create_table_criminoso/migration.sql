-- CreateTable
CREATE TABLE "criminoso" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" VARCHAR(255),
    "dt_hr_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "criminoso_pkey" PRIMARY KEY ("id")
);
