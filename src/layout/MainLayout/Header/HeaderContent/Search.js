import React from 'react';
import { Box, FormControl } from '@mui/material';

const Search = () => (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}></FormControl>
    </Box>
);

export default Search;
