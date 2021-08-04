create database project;
use project;
CREATE TABLE IF NOT EXISTS `project`.`Person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

select * from Person;

-- run after running docker-compose up
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'gueban';