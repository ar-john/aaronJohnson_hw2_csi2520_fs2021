const express = require('express');
const ejs = require('ejs');

//create express app
const app = express();

//initialize body parser midddleware to parse data sent by users
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//initialize ejs middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//routes
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/my_resume.ejs", (req,res) => {
    res.render("/html/my_resume.ejs");
});

app.get("/my_fun_facts.ejs", (req,res) => {
    res.render("/html/my_fun_facts.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port 3000'));