SHOW DATABASES

USE myDB

SHOW TABLES

CREATE TABLE products(
    product_id INT(50),
    product_name VARCHAR(50) UNIQUE, /*UNIQUE*/
    price DECIMAL(4,2) NOT NULL /*Can't add a Null*/
    CONSTRAINT chk CHECK(price>=10) /*Makes sure that price will always greater than 10*/
);

ALTER TABLE products
ADD CONSTRAINT
UNIQUE(product_name) /*If you forgot to assign during creation*/

ALTER TABLE products
ADD CONSTRAINT chk CHECK(price>=10)/*If you forgot to assign during creation*/

INSERT INTO products
VALUES(1,"Ham",55.3),
(2,"Jam",60.0)
;
SELECT * FROM transactions

DROP TABLE transactions

CREATE TABLE transactions(
    transaction_id INT PRIMARY KEY AUTO_INCREMENT, /*Not NULL and Unique and only one primary key is allowed*/
    amount DECIMAL(10,2)           /*AUTO_INCREMENT automatically increaments value*/
);

ALTER TABLE transactions
ADD CONSTRAINT
PRIMARY KEY(transaction_id); /*If forgot during creation*/

INSERT INTO transactions
VALUE(1111,4.55)

INSERT INTO transactions(amount) /*Specifically inserting value in the ammount*/
VALUES(6.00);