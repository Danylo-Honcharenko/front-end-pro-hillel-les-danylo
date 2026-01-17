import React from 'react';
import {
    Box,
    Button,
    FormControl, InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";

const Swapi = () => {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography variant="h4" gutterBottom>
                Swapi
            </Typography>
            <FormControl fullWidth sx={{ m: 1, width: "45ch", gap: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Запит</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">https://www.swapi.tech/api/</InputAdornment>}
                    label="Запит"
                />
                <Button variant="contained">Зробити запит</Button>
            </FormControl>
        </Box>
    );
};

export default Swapi;