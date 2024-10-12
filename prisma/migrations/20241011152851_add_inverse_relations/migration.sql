-- CreateTable
CREATE TABLE `Materia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroFicha` VARCHAR(191) NOT NULL,
    `idMateria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FichaDiaSemana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFicha` INTEGER NOT NULL,
    `diaSemana` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ambiente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `bloque` VARCHAR(191) NOT NULL,
    `sede` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HorarioInstructor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idInstructor` INTEGER NOT NULL,
    `idFicha` INTEGER NOT NULL,
    `jornada` VARCHAR(191) NOT NULL,
    `diaSemana` VARCHAR(191) NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `horaFin` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HorarioFicha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFicha` INTEGER NOT NULL,
    `jornada` VARCHAR(191) NOT NULL,
    `diaSemana` VARCHAR(191) NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `horaFin` VARCHAR(191) NOT NULL,
    `idMateria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HorarioAmbiente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idAmbiente` INTEGER NOT NULL,
    `jornada` VARCHAR(191) NOT NULL,
    `diaSemana` VARCHAR(191) NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `horaFin` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InstructorFicha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idInstructor` INTEGER NOT NULL,
    `idFicha` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FichaAmbiente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFicha` INTEGER NOT NULL,
    `idAmbiente` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FichaResultadoAprendizaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFicha` INTEGER NOT NULL,
    `idResultado` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResultadoAprendizaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rol` ENUM('INSTRUCTOR', 'ADMINISTRADOR') NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trimestre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trimestre` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `datosInstructores` JSON NOT NULL,
    `datosFichas` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ficha` ADD CONSTRAINT `Ficha_idMateria_fkey` FOREIGN KEY (`idMateria`) REFERENCES `Materia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FichaDiaSemana` ADD CONSTRAINT `FichaDiaSemana_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioInstructor` ADD CONSTRAINT `HorarioInstructor_idInstructor_fkey` FOREIGN KEY (`idInstructor`) REFERENCES `Instructor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioInstructor` ADD CONSTRAINT `HorarioInstructor_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioFicha` ADD CONSTRAINT `HorarioFicha_idMateria_fkey` FOREIGN KEY (`idMateria`) REFERENCES `Materia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioFicha` ADD CONSTRAINT `HorarioFicha_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioAmbiente` ADD CONSTRAINT `HorarioAmbiente_idAmbiente_fkey` FOREIGN KEY (`idAmbiente`) REFERENCES `Ambiente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstructorFicha` ADD CONSTRAINT `InstructorFicha_idInstructor_fkey` FOREIGN KEY (`idInstructor`) REFERENCES `Instructor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstructorFicha` ADD CONSTRAINT `InstructorFicha_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FichaAmbiente` ADD CONSTRAINT `FichaAmbiente_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FichaAmbiente` ADD CONSTRAINT `FichaAmbiente_idAmbiente_fkey` FOREIGN KEY (`idAmbiente`) REFERENCES `Ambiente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FichaResultadoAprendizaje` ADD CONSTRAINT `FichaResultadoAprendizaje_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FichaResultadoAprendizaje` ADD CONSTRAINT `FichaResultadoAprendizaje_idResultado_fkey` FOREIGN KEY (`idResultado`) REFERENCES `ResultadoAprendizaje`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
