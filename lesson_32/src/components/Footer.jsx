import React from 'react';
import {Box, Typography} from "@mui/material";
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Box sx={{position: "fixed", left: 0, right: 0, bottom: 0, width: '100%', p: 1}}>
            <Typography>Telegram: <Link href="testtelegram.com">@testTelegram</Link></Typography>
            <Typography>GitHub: <Link href="https://github.com">github.com</Link></Typography>
            <Typography>Number: <Link href="tel:+38089898989">+38089898989</Link></Typography>
        </Box>
    );
};

export default Footer;