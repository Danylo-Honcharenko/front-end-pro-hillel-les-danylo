import React from 'react';
import {Box, Button, FormControl, Stack, TextField, Toolbar, Typography} from "@mui/material";

const Todo = () => {

    const tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6"];

    return (
        <Box component="main" sx={{ p: 3, width: "50ch" }}>
            <Toolbar />
            <Typography variant="h4" gutterBottom>
                Todo
            </Typography>
            <FormControl sx={{gap: 1, width: "45ch" }}>
                <TextField id="outlined-basic" label="Задача" variant="outlined" />
                <Button variant="contained">Створити</Button>
            </FormControl>
            <Stack spacing={2} sx={{ mt: 1 }}>
                {tasks.map((task, index) => (
                    <Box key={index} sx={{backgroundColor: '#f5f5f5', p: 0.5}}><Typography>{task}</Typography></Box>
                ))}
            </Stack>
        </Box>
    );
};

export default Todo;