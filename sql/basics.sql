CREATE DATABASE myDB;  /*Create Database*/
SHOW DATABASES /*Show all DB*/

DROP DATABASE myDB

DROP TABLE employees /*Drop Tables*/

USE myDB /*Use a created DB*/

SELECT DATABASE(); /*Show the selected DB*/

CREATE TABLE employees(
    employee_id INT, /*NameOfTheColumn,Type*/
    first_name VARCHAR(50),/*NameOfTheColumn,Type(size)*/
    hourly_pay DECIMAL(5,2),/*NameOfTheColumn,Type(IntSize,DecSize)*/
    hire_date DATE/*For date and time*/
);

SHOW TABLES; /*Shows existing table names*/

DESCRIBE employees; /*Shows the structure of the Table*/

SELECT * FROM employees; /*Select the created Table*/

RENAME TABLE employees TO workers; /*Change table name*/

ALTER TABLE employees
ADD phone_number BIGINT(10); /*Add new column to the table*/

ALTER TABLE employees
RENAME COLUMN phone_number to email; /*Alter a name of a column*/

ALTER TABLE employees
MODIFY COLUMN email VARCHAR(50); /*Change only Data type*/

INSERT INTO employees
VALUES (1,"Sahnik",40.44,"2026-04-02",7407902174),
(2,"Gyanu",90.44,"2023-09-12",1234567890);

SELECT first_name, hourly_pay FROM employees; /*Fetch Specific column*/

SELECT * FROM employees 
WHERE employee_id = 1; /*Conditional search*/

SELECT * FROM employees
WHERE hourly_pay > 50

DELETE FROM employees WHERE employee_id = 2

UPDATE employees
SET hourly_pay = 100,
phone_number = 12345677880 /*Multiple changes using WHERE*/
WHERE employee_id = 1

