drop table if exists person;
create table person
(
    id        integer primary key,
    firstname varchar,
    lastname  varchar,
    score     integer,
    color     varchar,
    avatar    varchar
);

drop table if exists avatar;
create table avatar
(
    id integer primary key,
    name varchar
);

insert into avatar(name)
values ('avatar1.png'),
       ('avatar2.png'),
       ('avatar3.png'),
       ('avatar4.png'),
       ('avatar5.png'),
       ('avatar6.png'),
       ('avatar7.png');

insert into person (firstname,lastname,score,color,avatar)
values ('Jane', 'Smith', 1250, '#ADC698', 'avatar2.png'),
       ('John', 'Dow', 1780, '#B74F6F', 'avatar1.png'),
       ('Betty', 'O''Brian', 2120, '#F92A82', 'avatar3.png');
