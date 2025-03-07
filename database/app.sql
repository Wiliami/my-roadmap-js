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