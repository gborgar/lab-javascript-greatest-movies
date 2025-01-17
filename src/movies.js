// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => (movie.director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.reduce(function(numberMovies, movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      numberMovies++;
    }
    return numberMovies;
  }, 0);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length > 0) {
    const scores = movies.reduce(function(totalScore, movie) {
      if (movie.score && movie.score !== '') {
        return (totalScore + movie.score);
      }
      return totalScore;
    }, 0);
  
    return parseFloat((scores/movies.length).toFixed(2));
  } 

  return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length > 0) {
    const scores = movies.reduce(function(totals, movie) {
      if (movie.genre.includes('Drama')) {
        return {
          scores: totals.scores + movie.score,
          numberMovies: totals.numberMovies++
        };
      } 
      return totalScore;
    }, { scores: 0, numberMovies: 0});

    return parseFloat((scores/movies.length).toFixed(2));
    

  }
  return 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
