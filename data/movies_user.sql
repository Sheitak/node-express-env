create table user
(
    id         int auto_increment
        primary key,
    firstname  varchar(100)                                     not null,
    lastname   varchar(100)                                     not null,
    email      varchar(100)                                     not null,
    hired_year smallint                                         null,
    department enum ('Marketing', 'HR', 'Software', 'Hardware') null
);

INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (1, 'Jane', 'Doe', 'anonymous@hole.com', 2015, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (2, 'John', 'Doe', 'anonymouslight@hole.com', 2019, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (3, 'Jill', 'Valentine', 'lowumbrella@t-virus.com', 2015, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (5, 'Violet', 'Ramirez', 'Violet.Ramirez@videnupu.pk', 2016, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (6, 'Carlos', 'Mannucci', 'Carlos.Mannucci@wahahja.pn', 2015, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (7, 'Susan', 'Ikeda', 'Susan.Ikeda@so.ac', 2019, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (8, 'Sean', 'McGuire', 'Sean.McGuire@fut.td', 2014, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (9, 'Jon', 'Cavicchi', 'Jon.Cavicchi@zan.pg', 2017, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (10, 'Peter', 'Verbeek', 'Peter.Verbeek@onefiba.rs', 2017, 'Hardware');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (11, 'Todd', 'Wong', 'Todd.Wong@fe.hu', 2019, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (12, 'Alice', 'Watson', 'Alice.Watson@jazus.cr', 2019, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (13, 'Millie', 'Ciabatti', 'Millie.Ciabatti@faotori.qa', 2018, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (14, 'Alejandro', 'Marino', 'Alejandro.Marino@uvhimvi.si', 2014, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (15, 'Maud', 'Patterson', 'Maud.Patterson@dawmevgeb.gt', 2016, 'Hardware');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (16, 'Andre', 'Diez', 'Andre.Diez@isiavra.km', 2017, 'Hardware');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (17, 'Jackson', 'Dean', 'Jackson.Dean@atjon.cc', 2018, 'Hardware');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (18, 'Barbara', 'Bernardi', 'Barbara.Bernardi@kegavbag.kz', 2019, 'Hardware');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (19, 'Cameron', 'Valk', 'Cameron.Valk@pa.bo', 2014, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (20, 'Calvin', 'van Oosten', 'Calvin.van Oosten@ekidafij.ps', 2017, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (21, 'Ollie', 'Mazzei', 'Ollie.Mazzei@ze.ag', 2014, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (22, 'Jack', 'Blake', 'Jack.Blake@kur.ru', 2018, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (23, 'Edwin', 'Tran', 'Edwin.Tran@rezi.pf', 2015, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (24, 'Celia', 'Butler', 'Celia.Butler@hilcehbi.tw', 2015, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (25, 'Adele', 'Bouvier', 'Adele.Bouvier@ta.bg', 2014, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (26, 'Dylan', 'Amato', 'Dylan.Amato@ukihom.gy', 2019, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (27, 'Louisa', 'Black', 'Louisa.Black@bemufe.bs', 2016, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (28, 'Lloyd', 'Ndiaye', 'Lloyd.Ndiaye@wilcu.cw', 2019, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (29, 'Mattie', 'Carrai', 'Mattie.Carrai@ipe.bo', 2018, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (30, 'Stephen', 'van der Heijden', 'Stephen.van der Heijden@fu.eh', 2017, 'Hardware');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (31, 'Ollie', 'Rodgers', 'Ollie.Rodgers@ufa.io', 2019, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (32, 'Brent', 'Cantini', 'Brent.Cantini@wunpa.am', 2014, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (33, 'Ricardo', 'Michel', 'Ricardo.Michel@do.tp', 2018, 'HR');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (34, 'Gabriel', 'Hunt', 'Gabriel.Hunt@ha.com', 2014, 'Software');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (35, 'Chris', 'Sanz', 'Chris.Sanz@ju.tn', 2019, 'Marketing');
INSERT INTO movies.user (id, firstname, lastname, email, hired_year, department) VALUES (36, 'Cora', 'Guerrero', 'Cora.Guerrero@zuwovho.wf', 2019, 'Marketing');