/*
  Warnings:

  - You are about to drop the column `crime_id` on the `arma` table. All the data in the column will be lost.
  - You are about to drop the column `arma_id` on the `crime` table. All the data in the column will be lost.
  - You are about to drop the column `criminoso_id` on the `crime` table. All the data in the column will be lost.
  - Added the required column `id_crime` to the `arma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_arma` to the `crime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_criminoso` to the `crime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "arma" DROP COLUMN "crime_id",
ADD COLUMN     "id_crime" UUID NOT NULL;

-- AlterTable
ALTER TABLE "crime" DROP COLUMN "arma_id",
DROP COLUMN "criminoso_id",
ADD COLUMN     "id_arma" UUID NOT NULL,
ADD COLUMN     "id_criminoso" UUID NOT NULL;

-- AlterTable
ALTER TABLE "criminoso" ALTER COLUMN "idade" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "crime" ADD CONSTRAINT "crime_id_criminoso_fkey" FOREIGN KEY ("id_criminoso") REFERENCES "criminoso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arma" ADD CONSTRAINT "arma_id_crime_fkey" FOREIGN KEY ("id_crime") REFERENCES "crime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
