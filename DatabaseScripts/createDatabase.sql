create database powgamedb;
create user 'gameuser'@'localhost' identified by 'password';
grant all on powgamedb.* to 'powgamedb';

CREATE TABLE `powgamedb`.`scoreboard` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` TEXT NOT NULL,
  `Score` BIGINT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;