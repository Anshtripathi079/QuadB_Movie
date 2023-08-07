import { useEffect } from "react";
import "./movielist.css";
import { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await res.json();
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie__container">
      <h1 className="main__heading">Latest Movies</h1>
      <div className="movies__section">
        {movies &&
          movies.map((movie) => {
            return (
              <MovieCard
                name={movie.show.name}
                image={movie.show.image?.original}
                status={movie.show.status}
                language={movie.show.language}
                summary={movie.show.summary}
                key={movie.show.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieList;
