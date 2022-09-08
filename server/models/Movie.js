const { Schema, model } = require("../db/connection") // import Schema & model

const personDoc = new Schema({
    firstname: String,
    lastname: String
});

const MovieSchema = new Schema({
    name: String,
    year: Number,
    genres: [String],
    ageLimit: Number,
    rating: Number,
    director: personDoc,
    actors: [personDoc],
    synopsis: String
});

//Movie model
const Movie = model("Movie", MovieSchema)

module.exports = Movie