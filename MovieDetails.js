import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt={movie.title} style={{ width: '300px', height: 'auto' }} /> {/* Use movie's imageUrl */}
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}/5</p>
    </div>
  );
};

export default MovieDetails;
