# MoviesAroundMe2

- starting the project with a dev branch


## Setup
- Clone this repository
- `npm install`
- `cd public`
- `bower install`
- Run `npm start` from the root folder to start the app

## Rating service (OMDb)
- Returns a promise
- Inside controller: `OMDb.makeRequest(movieTitle).then(function(response) { WORK WITH RESPONSE });`
- `response` in the above line has these properties that are useful:
- response.data.________
-              .Plot
-              .imdbRating
-              .tomatoRating (.tomatoRotten, .tomatoUserRating)
- There are a bunch more, simply log `response` and have a look
