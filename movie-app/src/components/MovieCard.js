import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.posterURL} alt={movie.title} />
      </div>
      <div className="card-content">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <span>Rating: {movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
