import React from "react";
import styles from "./MoviesCard.module.css";
import { Link } from "react-router-dom";

 export const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <li className={styles.movieCard}>
        <Link to={"/movies/"+movie.id} > 
      <img
        with={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      {movie.title}
        </Link>
    </li>
  );
};


