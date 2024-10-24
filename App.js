import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import the Navbar
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import SearchBar from './components/SearchBar'; 
import MoanaImage from './components/Moana.png'; 
import TangledImage from './components/Tangled.png'; 
import BeautyImage from './components/beauty.png'; 
import CinderellaImage from './components/cinderella.png'; 
import SnowImage from './components/snow.png'; 
import SoulImage from './components/soul.png'; 
import maleficentImage from './components/maleficient.png'; 
import EncantoImage from './components/encanto.png'; 
import ratatouilleImage from './components/ratatouille.png';
import walleImage from './components/walle.png';  

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Rapunzel', releaseDate: '2010', rating: 4.5, imageUrl: TangledImage },
    { id: 2, title: 'Moana', releaseDate: '2016', rating: 3.8, imageUrl: MoanaImage },
    { id: 3, title: 'Beauty and the Beast', releaseDate: '2017', rating: 4.9, imageUrl: BeautyImage },
    { id: 4, title: 'Cinderella', releaseDate: '2015', rating: 4.1, imageUrl: CinderellaImage },
    { id: 5, title: 'Snow White', releaseDate: '1937', rating: 4.3, imageUrl: SnowImage },
    { id: 6, title: 'Maleficent', releaseDate: '2014', rating: 4.7, imageUrl: maleficentImage },
    { id: 7, title: 'Encanto', releaseDate: '2021', rating: 3.9, imageUrl: EncantoImage },
    { id: 8, title: 'Ratatouille', releaseDate: '2007', rating: 4.6, imageUrl: ratatouilleImage },
    { id: 9, title: 'Soul', releaseDate: '2021', rating: 3.5, imageUrl: SoulImage },
    { id: 10, title: 'WALL-E', releaseDate: '2008', rating: 4.8, imageUrl: walleImage },
  ]);
  
  const [favorites, setFavorites] = useState([
    { id: 3, title: 'Beauty and the Beast', releaseDate: '2017', rating: 4.9, imageUrl: BeautyImage }, // Add this movie to favorites
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery)
  );

  return (
    <Router>
      <Header />
      <Navbar /> {/* Keeps the navigation bar */}
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={filteredMovies} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
