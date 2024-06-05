import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';
import { Container } from '@mui/material';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time',
      posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
      rating: 4,
    },
    {
      title: 'The Dark Knight',
      description: 'The rise of the Dark Knight',
      posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQabt5_iESscctssvn8VxDbvnV7i9C42UyLOCWkFdqwJQE0VZYeg2qcXEcYYLh8td8Zna3zA5Nrk7s7SDElRyhKYiIf2AwvJ7F3mKVis5c',
      rating: 5,
    },
    {
      title: 'Parasite',
      description: 'A dark comedy thriller',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8c3wAuv77gULb4pX3TRltmjgFSbpu4F_w6A&s',
      rating: 5,
    },
  ]);

  const [filterText, setFilterText] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterText.toLowerCase()) &&
    (filterRating === '' || movie.rating >= filterRating)
  );

  return (
    <Container>
      <h1 className="my-4">My Movie App</h1>
      <Filter
        filterText={filterText}
        setFilterText={setFilterText}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />
    </Container>
  );
};

export default App;
