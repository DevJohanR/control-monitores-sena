-- AlterTable
ALTER TABLE `HorarioFicha` ADD COLUMN `idAmbiente` INTEGER NULL,
    ADD COLUMN `idInstructor` INTEGER NULL;

-- CreateIndex
CREATE INDEX `index_idInstructor` ON `HorarioFicha`(`idInstructor`);

-- CreateIndex
CREATE INDEX `index_idAmbiente` ON `HorarioFicha`(`idAmbiente`);

-- AddForeignKey
ALTER TABLE `HorarioFicha` ADD CONSTRAINT `HorarioFicha_idInstructor_fkey` FOREIGN KEY (`idInstructor`) REFERENCES `Instructor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioFicha` ADD CONSTRAINT `HorarioFicha_idAmbiente_fkey` FOREIGN KEY (`idAmbiente`) REFERENCES `Ambiente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `HorarioFicha` RENAME INDEX `HorarioFicha_idFicha_fkey` TO `index_idFicha`;

-- RenameIndex
ALTER TABLE `HorarioFicha` RENAME INDEX `HorarioFicha_idMateria_fkey` TO `index_idMateria`;
