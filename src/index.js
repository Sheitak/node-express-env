/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
require('dotenv').config();
const express = require("express");
const app = express();

const favicon = require('serve-favicon');
const path = require('path');
const connection = require("./config");
const port = process.env.PORT || 3000;

connection.connect(function(err) {
  if (err) {
    console.error('error connecting : ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.use(favicon(path.join(__dirname, '../public', 'images', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.send("Welcome to my favorite movie list");
});

app.get("/api/movies", (req, res) => {
  let sql = "SELECT * from movies";
  const sqlValues = [];

  if (req.query.rating || req.query.genre) {
    sql += ' WHERE rating = ? OR genre = ?';
    sqlValues.push(req.query.rating, req.query.genre);
  }

  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/api/movies/:id", (req, res) => {
  connection.query(
    "SELECT * from movies WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else if (results.length === 0) {
        res.status(404).send('Movie not found');
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/search", (req, res) => {
  connection.query(
    "SELECT * from movies WHERE duration <= ?",
    [req.query.maxDuration],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/users", (req, res) => {
  let sql = 'SELECT * FROM user';
  const sqlValues = [];

  if (req.query.department) {
    sql += ' WHERE department = ?';
    sqlValues.push(req.query.department);
  }
  
  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/api/users/:id", (req, res) => {
  connection.query(
    "SELECT * from user WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {  
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else if (results.length === 0) {
        res.status(404).send('User not found');
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.post("/api/movies", (req, res) => {
  const { title, director, year, color, duration } = req.body;
  connection.query(
    "INSERT INTO movies(title, director, year, color, duration) VALUES(?, ?, ?, ?, ?)",
    [title, director, year, color, duration], 
    (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error saving a movie");
          } else {
            res.status(200).send("Successfully saved 🎉");
          }
        }
    ); 
});

app.post("/api/users", (req, res) => {
  const { firstname, lastname, email } = req.body;
  connection.query(
    "INSERT INTO user(firstname, lastname, email) VALUES(?, ?, ?)",
    [firstname, lastname, email], 
    (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error saving a movie");
          } else {
            res.status(200).send("Successfully user saved 🎉");
          }
        }
    ); 
});

app.put("/api/users/:id", (req, res) => {
  const idUser = req.params.id;
  const newUser = req.body;
	connection.query(
    "UPDATE user SET ? WHERE id = ?",
    [newUser, idUser],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating a user");
      } else {
        res.status(200).send("User updated successfully 🎉");
      }
    }
  );
});

app.put("/api/movies/:id", (req, res) => {
  const idMovie = req.params.id;
  const newMovie = req.body;
	connection.query(
    "UPDATE movies SET ? WHERE id = ?",
    [newMovie, idMovie],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating a user");
      } else {
        res.status(200).send("Movie updated successfully 🎉");
      }
    }
  );
});

app.delete("/api/users/:id", (req, res) => {
  const idUser = req.params.id;
  connection.query(
    "DELETE FROM user WHERE id = ?",
    [idUser],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting an user 😱");
      } else {
        res.status(200).send("User deleted ! 🎉");

      }
    }
  );
});

app.delete("/api/movies/:id", (req, res) => {
  const idMovie = req.params.id;
  connection.query(
    "DELETE FROM movies WHERE id = ?",
    [idMovie],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting an Movie 😱");
      } else {
        res.status(200).send("Movie deleted ! 🎉");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Application run at http://localhost:${port}`);
});