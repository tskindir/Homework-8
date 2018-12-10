//create variables for packages used
require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var keys = require("./keys");

var userChoice = process.argv[2];
var userInput = process.argv[3];

switch (userChoice) {
    case "concert-this":
        concertThis(userInput);
        break;
    case "spotify-this-song":
        spotifyThisSong(userInput);
        break;
    case "movie-this":
        if(userInput.length<=0){
            movieThis("Mr.Nobody,");
        }else(movieThis(userInput));
        break;
    case "do-what-it-says":
        doWhatItSays(userInput);
        break;
    default:
        console.log("please enter something");
        break;
}

//function that gets concert information by searching api with axios
function concertThis(artist){
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bands.id;
    axios.get(queryURL).then(function(response){
        //console.log name of venue, venue location and date of event
        console.log(response.data.name);
        console.log(response.data.location);
        //moment.js used to format to MM/DD/YYYY
        console.log(response.data.date);

  })

}

function spotifyThisSong(song){
    //spotify object
    spotify = new Spotify(keys.spotify);
    //use spotify package to search api for song
    spotify.search(
        {
        type: "track",
        query: song
        },function(error, response){
            if (error){
                console.log("ERROR: " + error);
            }

            console.log(response.Artist);
            console.log(response.songName);
            console.log(response.Album);
        })

}

function movieThis(movie){
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" +keys.axios.id;
    axios.get(queryURL).then(function(response){
    //console.log title, year, IMDB rating, rotten tomatos rating, country, language, plot, actors
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    console.log(response.data.rottenTomatoRating);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
  })
}

function doWhatItSays() {

}