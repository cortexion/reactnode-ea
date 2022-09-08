const express = require('express');
const cors = require("cors");
const path = require('path');
const apiRoute = require('./apiRoute.js');
const app = express();
const port = process.env.PORT || 8080;

const MovieRouter = require("./controllers/Movie") // import Movie Routes

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors()) //add cors headers
app.use(express.json()) //parse json bodies

app.get("/", (req, res) => {
    res.send("Server test")
})

app.use("/api/movies", MovieRouter) //send all "/movies" request to MovieRouter

apiRoute(app); //last

app.listen(port, () => console.log("SERVER STATUS", `Listening on port ${port}`))