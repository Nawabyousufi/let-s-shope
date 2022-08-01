const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "143@alidam",
    database: "server_db"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.get("/api/get", (req, res) => {
    const sqlGet = "select *from server_db";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
})*/
app.get("/", (req, res) => {

    const sqlInsert = " INSERT INTO  login('email','password' ) values('yousufi@gmail.com', '143@alidam')";

    db.query(sqlInsert, (error, result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Hello Nawab");
    });

})
app.listen(5000, () => {
    console.log("server is running on port 5000");
});