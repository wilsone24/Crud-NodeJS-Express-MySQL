CREATE DATABASE IF NOT EXISTS companydb;
USE companyddb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
);

DESCRIBE employee;/* Describe the characteristics of the table */


INSERT INTO employee( /* Insert a value into the table in the database */
    name,
    salary
) VALUES ("Diana",2000000);
