import React from 'react';
import { TextField, Box } from '@mui/material';

const Filter = ({ filterText, setFilterText, filterRating, setFilterRating }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        label="Search by title"
        variant="outlined"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <TextField
        label="Search by rating"
        variant="outlined"
        type="number"
        value={filterRating}
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </Box>
  );
};

export default Filter;
