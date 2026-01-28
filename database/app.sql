/* Conceitos da linguagem */
-- SQL = Standard query Structered (Linguagem Struturada de consulta)

-- Divida em 4 agrupamentos: Manipulation, Definition, Control e Transaction
-- DML - Data Manipulation Language: INSERT, DELETE, UPDATE E SELECT
-- DDL - Data Definition Language: CREATE, ALTER E DROP
-- DCL - Data Control Language: GRANT, REVOKE E DENY
-- DTL - Data Transaction Language: BEGIN TRANSACTION, COMMIT E ROLLBACK

/* Sintax commands */
create table users (
    userId SERIAL PRIMARY KEY 
    name VARCHAR(55) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(55)NOT NULL
);
    
/* CRUD */
/* CREATE */
insert into users (name, email, password) values("Jimi Hendrix", "jimi.hendrix@gmail.com", "12345")

/* READ */
select * from users;

/* UPDATE */
update users name = 'Teste' where userId = 1

/* DELETE */
delete from users where userId = 1;




-- O que é uma transaction?
-- É um conjunto de operações no banco de dados que são executadas como única unidade lógica.
-- Conceito-chave: ACID (Atomicidade, Consistência, Isolamento, Durabilidade)


begin;

update contas
set saldo = saldo - 100
where id = 1;

update contas
set saldo = saldo + 100
where id = 2;

commit;




-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');

-- fetch 
SELECT * FROM EMPLOYEE WHERE dept = 'Sales';
-- Transaction 
BEGIN;

UPDATE EMPLOYEE SET name = 'Clark' WHERE empId = 0001;

UPDATE EMPLOYEE SET name = 'Dave' WHERE empId = 0002;

COMMIT;
