const movies = [
  { movie: "Toy Story", gender: "Infantile" },
  { movie: "Scary Movie", gender: "Funny" },
  { movie: "It", gender: "Horror" },
  { movie: "Life of Pi", gender: "Sad" },
];

const randomMovies = movies.forEach((movie) => {
  console.log(
    `My favorite movie is ${movie.movie} because I like ${movie.gender} movies`
  );
});
