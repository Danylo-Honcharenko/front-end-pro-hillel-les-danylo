import React from 'react';
import {AppBar, Box, Button, CssBaseline, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router";

const Header = () => {

    const navItems = [
        {
            path: "/",
            name: "Головна"
        },
        {
            path: "todos",
            name: "Todo"
        },
        {
            path: "swapi",
            name: "Swapi"
        }
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Link to={item.path} key={index}>
                                <Button sx={{ color: '#fff' }}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;