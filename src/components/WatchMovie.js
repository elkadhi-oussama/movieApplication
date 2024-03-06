import React from "react";
import "../Css/WatchMovie.css";
import { useParams } from "react-router-dom";

const WatchMovie = ({
  data,
  setsearchTitle,
  setsearchRate,
  setsearchGenre,
  setsearchLang,
}) => {
  const url = parseFloat(useParams().id);

  const filmSearched = data.filter((film) => {
    if (film.id === url) {
      return film;
    }
  })[0];
  setsearchGenre("");
  setsearchLang("");
  setsearchRate("");
  setsearchTitle("");
  return (
    <div className="allCardsMov">
      <div className="divWatchMovie">
        <img src={filmSearched.image} alt="" />
        <div className="contWatch">
          <h1> Title : {filmSearched.title}</h1>
          <p>{filmSearched.decr}</p>
          <div className="genreMov">
            <span>Genre</span>
            <p> {filmSearched.genre} </p>
          </div>
          <div className="rateMov">
            <span>Rate</span>
            <p> {filmSearched.rate} </p>
          </div>
        </div>
        <div className="btnMov">
          <button>
            <a href="#video" className="href">
              Watch Now
            </a>
          </button>
          <button>
            <a target="_blank" href={filmSearched.downlaod} className="href">
              Download
            </a>
          </button>
        </div>
      </div>
      <iframe
        id="video"
        className="videoMov"
        src={filmSearched.stream}
      ></iframe>
    </div>
  );
};

export default WatchMovie;
