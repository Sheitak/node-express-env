create table movies
(
    id       int auto_increment
        primary key,
    title    varchar(255)                                   not null,
    director varchar(255)                                   not null,
    year     varchar(255)                                   not null,
    color    tinyint(1)                                     not null,
    duration int                                            not null,
    rating   smallint                                       null,
    genre    enum ('Comedy', 'Drama', 'Romance', 'Fantasy') null
)
    charset = utf8;

INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (0, 'Citizen Kane', 'Orson Wells', '1941', 0, 120, 5, 'Drama');
INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (1, 'Oh I think I forgot this movie name for a test !', 'Francis Ford Coppola', '1972', 1, 180, 3, 'Drama');
INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (2, 'Pulp Fiction', 'Quentin Tarantino', '1994', 1, 180, 4, 'Romance');
INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (3, 'Apocalypse Now', 'Francis Ford Coppola', '1979', 1, 150, 1, 'Fantasy');
INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (4, '2001 a space odyssey', 'Stanley Kubrick', '1968', 1, 160, 5, 'Drama');
INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (5, 'The Dark Knight', 'Christopher Nolan', '2008', 1, 150, 5, 'Drama');
INSERT INTO movies.movies (id, title, director, year, color, duration, rating, genre) VALUES (6, 'Whiplash', 'Damien Chazelle', '2014', 1, 107, 3, 'Drama');