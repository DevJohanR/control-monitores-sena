/*
  Warnings:

  - Added the required column `idAmbiente` to the `HorarioInstructor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HorarioInstructor` ADD COLUMN `idAmbiente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `HorarioInstructor` ADD CONSTRAINT `HorarioInstructor_idAmbiente_fkey` FOREIGN KEY (`idAmbiente`) REFERENCES `Ambiente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
