import React, { useState } from "react";
import "../Css/MovieList.css";
import MovieCards from "./MovieCards";

const MovieList = ({
  data,
  searchTitle,
  searchRate,
  searchGenre,
  searchLang,
}) => {
  return (
    <div className="flexCards">
      {data
        .filter((film) => {
          return (
            film.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            (!searchGenre || film.genre === searchGenre) &&
            (!searchLang || film.lang === searchLang) &&
            (!searchRate || film.rate>= searchRate)
          );
        })
        .map((filterFilm) => (
          <MovieCards key={filterFilm.id} film={filterFilm} />
        ))}
    </div>
  );
};

export default MovieList;

/*

return (
          
        );

*/
