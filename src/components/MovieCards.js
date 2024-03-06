import React from "react";
import "../Css/MovieCards.css";
import { Link } from "react-router-dom";
const MovieCards = ({ film }) => {
  return (
    <>
      <Link to={`/${film.id}`} >
        <article key={film.id} className="card">
          <img
            className="card__background"
            src={film.image}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title"> {film.title} </h2>
              <p className="card__description">
                {film.decr.substring(0, 100)} ...
              </p>
            </div>
            <button className="card__button">Watch Now</button>
          </div>
        </article>
      </Link>
    </>
  );
};

export default MovieCards;
