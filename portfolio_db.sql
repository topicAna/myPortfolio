-- MySQL Script generated by MySQL Workbench
-- ven. 14 août 2020 20:39:25 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema portfolio_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `portfolio_db` ;

-- -----------------------------------------------------
-- Schema portfolio_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio_db` DEFAULT CHARACTER SET utf8 ;
USE `portfolio_db` ;

-- -----------------------------------------------------
-- Table `portfolio_db`.`experience`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`experience` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`experience` (
  `id` INT NOT NULL,
  `title` VARCHAR(255) NULL,
  `company` VARCHAR(255) NULL,
  `duration` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio_db`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`projects` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`projects` (
  `id` INT(150) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` TEXT(800) NULL,
  `youtube_link` VARCHAR(255) NULL,
  `github_link` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `portfolio_db`.``
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio_db`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`user` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `identifiant` TEXT(500) NULL,
  `password` VARCHAR(250) NULL,
  `intro` TEXT(3000) NULL,
  `email` VARCHAR(20) NULL,
  `phone` VARCHAR(45) NULL,
  `priviledge` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `portfolio_db`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`projects` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`projects` (
  `id` INT(150) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` TEXT(800) NULL,
  `youtube_link` VARCHAR(255) NULL,
  `github_link` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `portfolio_db`.`bio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`bio` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`bio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `intro` TEXT NULL,
  `cv_link` TINYTEXT NULL,
  `image_link` TINYTEXT NULL,
  PRIMARY KEY (`id`));
-- -----------------------------------------------------
-- Table `portfolio_db`.`toolbox_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`toolbox_item` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`toolbox_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `sortcut` VARCHAR(45) NULL,
  `master_level` INT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `portfolio_db`.`toolbox`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`toolbox` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`toolbox` (
  `projects_id` INT NOT NULL AUTO_INCREMENT,
  `toolbox_item_id` INT NOT NULL,
  PRIMARY KEY (`projects_id`, `toolbox_item_id`),
  INDEX `fk_toolbox_item_has_projects_projects1_idx` (`projects_id` ASC),
  INDEX `fk_toolbox_item_has_projects_toolbox_item_idx` (`toolbox_item_id` ASC));


-- -----------------------------------------------------
-- Table `portfolio_db`.`education`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `portfolio_db`.`education` ;

CREATE TABLE IF NOT EXISTS `portfolio_db`.`education` (
  `id` INT NOT NULL,
  `diploma_name` VARCHAR(255) NULL,
  `school` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
