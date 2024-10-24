import React from 'react';

const Favorites = ({ favorites }) => { 
  return (
    <div>
      <h2>Favorite Movies</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(movie => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Rating: {movie.rating}</p>
              <img src={movie.imageUrl} alt={movie.title} width={100} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
