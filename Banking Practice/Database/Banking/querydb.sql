SELECT * FROM customers;
SELECT * FROM accounts;
SELECT * FROM transactions;
SELECT * FROM operations;
SELECT * FROM loanapplications; 
SELECT * FROM loantype;
SELECT * FROM loan;
SELECT @transectionid;


SELECT loanapplications.*,loantype.loantype FROM loanapplications
inner join loantype ON loanapplications.loantypeid=loantype.loantypeid
WHERE applicationdate >='2023-01-01'
AND applicationdate<='2023-11-30';

SELECT loanapplications.*,customers.bankcustomerid,customers.usertype,loantype.loantype FROM loanapplications
INNER JOIN accounts ON loanapplications.accountid=accounts.acctid
INNER JOIN customers ON accounts.custid=customers.customerid
INNER JOIN loantype ON loanapplications.loantypeid=loantype.loantypeid;


DROP PROCEDURE IF EXISTS  fundtransfer
DELIMITER $$
CREATE PROCEDURE fundtransfer(IN fromaccountnumber VARCHAR(20),IN fromifsccode VARCHAR(20),
							IN toaccountnumber VARCHAR(20),IN toifsccode VARCHAR(20),
                            IN amount DOUBLE,IN operationtype VARCHAR(20),OUT transectionid INT)
BEGIN
DECLARE fromaccountid INT DEFAULT 0;
DECLARE toaccountid INT DEFAULT 0;
DECLARE fromoperationid INT DEFAULT 0;
DECLARE tooperationid INT DEFAULT 0;
DECLARE fromaccountbalance INT DEFAULT 0;
DECLARE toaccountbalance INT DEFAULT 0;

SELECT acctid,balance INTO fromaccountid,fromaccountbalance FROM accounts WHERE acctnumber=fromaccountnumber AND ifsccode=fromifsccode;
SELECT acctid,balance INTO toaccountid,toaccountbalance FROM accounts WHERE acctnumber=toaccountnumber AND ifsccode=toifsccode;

INSERT INTO operations(operationid,acctId,acctnumber,amount,operationdate,operationmode,operationtype)
VALUES(fromoperationid,fromaccountid,fromaccountnumber,amount,Now(),"W",operationtype);
SET fromoperationid=last_insert_id();

UPDATE accounts SET balance=fromaccountbalance-amount WHERE acctid=fromaccountid;

INSERT INTO operations(operationid,acctId,acctnumber,amount,operationdate,operationmode,operationtype)
VALUES(tooperationid,toaccountid,toaccountnumber,amount,Now(),"D",operationtype);
SET tooperationid=last_insert_id();

UPDATE accounts SET balance=toaccountbalance+amount WHERE acctid=toaccountid AND ifsccode=toifsccode;

INSERT INTO transactions(fromoperationid,tooperationid)
VALUES(fromoperationid,tooperationid);
END$$
DELIMITER ;

CALL fundtransfer("39025546601","MAHB0000286" ,"39025546612","BARBO0000286",4000,"Transfer",@transactionId);
SELECT @transactionId; 


DROP PROCEDURE  IF EXISTS calculateIntrest;

DELIMITER $$
CREATE PROCEDURE calculateIntrest(IN accountnumber VARCHAR(20),OUT trnasid INT)
BEGIN 

DECLARE accountid INT;
DECLARE totalbalance DOUBLE;
DECLARE rgdate DATE;
DECLARE totaldays INT DEFAULT 0;
DECLARE intrestamount DOUBLE DEFAULT 0;
DECLARE toifsccode VARCHAR(20) ;
DECLARE bankIfsccode VARCHAR(20) ;

SELECT acctid,registereddate,balance,ifsccode INTO accountid,rgdate,totalbalance,toifsccode
FROM accounts WHERE acctnumber=accountnumber; 
SELECT ifsccode INTO bankIfsccode FROM accounts WHERE acctnumber='123456789';

SELECT DATEDIFF(CURDATE(),rgdate) INTO totaldays;
IF totaldays>= 365 THEN
SET intrestamount=round(totalbalance*0.07,2);
SET totalbalance=round(totalbalance+totalbalance*0.07,2);

UPDATE accounts SET balance=totalbalance WHERE acctid=accountid;

CALL fundtransfer ('123456789',bankIfsccode,accountnumber,toifsccode,intrestamount,"Interest",trnasid );


END IF;
END $$
DELIMITER ;

CALL calculateIntrest('67675456546',@trnasid);
SELECT @trnasid













-- For Changing Password of DataBase
ALTER USER  root@localhost IDENTIFIED BY 'password';