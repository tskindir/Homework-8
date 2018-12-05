
require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var keys = require("./keys");

var userChoice = process.argv[2];

switch (userChoice) {
    case "concert-this":
        console.log("concert");
        break;
    case "spotify-this-song":
        console.log("spotify");
        break;
    case "movie-this":
        console.log("movie");
        break;
    case "do-what-it-says":
        console.log("whatever");
        break;
    default:
        console.log("please enter something");
        break;
}

//npm uninstall -'nodename'

//var spotify = new Spotify(keys.spotify);
