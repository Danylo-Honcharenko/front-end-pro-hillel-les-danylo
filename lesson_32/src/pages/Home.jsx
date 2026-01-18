import React from 'react';
import {Box, Toolbar, Typography} from "@mui/material";

const Home = () => {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography variant="h4" gutterBottom>
                Про мене
            </Typography>
            <Typography>
                Вмію то і то
            </Typography>
        </Box>
    );
};

export default Home;