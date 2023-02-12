require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
const PORT = 5001;
const pool = new Pool();
const { Client } = require("pg");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello express");
});

//CREATE
app.post("/p/blog", async (req, res) => {
  //listen to a post request
  console.log(req.body);
  const data = await pool.query(
    "INSERT INTO blog2(title, text, picture_url) VALUES($1, $2, $3) RETURNING *",
    [req.body.title, req.body.text, req.body.picture]
  );
  res.send(data.rows);
});

//READ
app.get("/p/blogs", async (req, res) => {
  //listen to a get request
  const data = await pool.query("SELECT * from blog2");
  res.send(data.rows);
});

//UPDATE
app.put("/p/blog", (req, res) => {
  //listen to a put request
  pool
    .query(
      "UPDATE blog2 SET title=$1, text=$2, picture_url=$3 where title=$4",
      [req.body.title, req.body.text, req.body.picture, req.body.oldTitle]
    )
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(PORT, () => {
  console.log("listening to port:", PORT);
});

//DELETE
app.delete("/p/blog", (req, res) => {
  pool
    .query("DELETE FROM blog2 WHERE title=$1", [req.body.title])
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      res.send(e);
    });
});
