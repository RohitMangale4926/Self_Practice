DROP DATABASE IF EXISTS  storagedb;
CREATE DATABASE storagedb;
USE storagedb;

CREATE TABLE product(id INT PRIMARY KEY AUTO_INCREMENT,
					title varchar(30),
                    description VARCHAR(50),
                    quantity int,
                    unitprice int
                    );
                    
INSERT INTO  product(id,title,description,quantity,unitprice) VALUES (100,"Pen","Good handwriting",145,10);


SELECT * FROM product;