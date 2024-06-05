import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Poster URL"
        variant="outlined"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <TextField
        label="Rating"
        variant="outlined"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Movie
      </Button>
    </Box>
  );
};

export default AddMovie;
