DROP DATABASE IF EXISTS Bankingpractice;
CREATE DATABASE Bankingpractice;
USE Bankingpractice;

CREATE TABLE
    customers(
        customerid INT AUTO_INCREMENT PRIMARY KEY,
        bankcustomerid INT NOT NULL,
        usertype ENUM("C", "I") NOT NULL
    );
                        
CREATE TABLE
    accounts(
        acctid INT PRIMARY KEY AUTO_INCREMENT,
        acctnumber VARCHAR(20) NOT NULL,
        accttype ENUM(
            'savings',
            'business',
            'current'
        ),
        ifsccode VARCHAR(20),
        balance DOUBLE,
        registereddate DATE,
        custid INT NOT NULL,
        CONSTRAINT fk_customerid FOREIGN KEY(custid) REFERENCES customers(customerid) ON UPDATE CASCADE ON DELETE CASCADE
    );
                        
CREATE TABLE
    operations(
        operationid INT PRIMARY KEY AUTO_INCREMENT,
        acctId INT NOT NULL,
        CONSTRAINT fk_acctId FOREIGN KEY(acctId) REFERENCES accounts(acctid) ON UPDATE CASCADE ON DELETE CASCADE,
        acctnumber VARCHAR(20) NOT NULL,
        amount DOUBLE,
        operationdate DATETIME,
        operationmode ENUM('D','W'),
        operationtype ENUM("Interest","EMI","Transfer")
    );
                        
CREATE TABLE
    transactions(
        id INT PRIMARY KEY AUTO_INCREMENT,
        fromoperationid INT NOT NULL,
        tooperationid INT NOT NULL,
        transactiondate datetime default current_timestamp,
        CONSTRAINT fk_operationid FOREIGN KEY(fromoperationid) REFERENCES operations(operationid) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT fk_rooperationid FOREIGN KEY(tooperationid) REFERENCES operations(operationid) ON UPDATE CASCADE ON DELETE CASCADE
    );
    
 CREATE TABLE loantype(
		loantypeid INT PRIMARY KEY AUTO_INCREMENT,
        loantype VARCHAR(20),
        intrestrate DOUBLE
        ) AUTO_INCREMENT=100;
                                    
CREATE TABLE
    loanapplications(
        applicationid INT PRIMARY KEY AUTO_INCREMENT,
        applicationdate DATE,
        loanamount double,
        loanduration INT,
		loanstatus ENUM("applied","approved","rejected") DEFAULT "applied",
        accountid INT NOT NULL,
        CONSTRAINT fk_accountid FOREIGN KEY (accountid) REFERENCES accounts(acctid) ON UPDATE CASCADE ON DELETE CASCADE,
        loantypeid INT NOT NULL,
        CONSTRAINT fk_loantypeid FOREIGN KEY(loantypeid) REFERENCES loantype(loantypeid)  ON UPDATE CASCADE ON DELETE CASCADE
    );

                    
CREATE TABLE
    loan(
        loanid INT PRIMARY KEY AUTO_INCREMENT,
        loansanctiondate DATE,
        emiday INT DEFAULT 10,
		emiamount DOUBLE,
        applicationid INT NOT NULL,
        CONSTRAINT fk_applicationid FOREIGN KEY(applicationid) REFERENCES loanapplications(applicationid) ON UPDATE CASCADE ON DELETE CASCADE
    );

                        