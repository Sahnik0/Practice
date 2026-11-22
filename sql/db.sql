CREATE DATABASE myDB;  /*Create Database*/
SHOW DATABASES /*Show all DB*/

DROP DATABASE myDB

USE myDB /*Use a created DB*/

SELECT DATABASE(); /*Show the selected DB*/

CREATE TABLE employees(
    employee_id INT, /*NameOfTheColumn,Type*/
    first_name VARCHAR(50),/*NameOfTheColumn,Type(size)*/
    hourly_pay DECIMAL(5,2),/*NameOfTheColumn,Type(IntSize,DecSize)*/
    hire_date TIME/*For date and time*/
);

SHOW TABLES; /*Shows existing table names*/

DESCRIBE employees; /*Shows the structure of the Table*/

SELECT * FROM employees; /*Select the created Table*/