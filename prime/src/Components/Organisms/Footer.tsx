import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {Grid} from "@mui/material";



interface FooterProps{
    copyright:React.ReactNode
    leftTop?:React.ReactNode
    centerTop?:React.ReactNode
    rightTop?:React.ReactNode
    text?:string,
    bgColor?:string
}
export default function Footer({copyright, leftTop, rightTop, centerTop, text,bgColor}:FooterProps) {
    return (


                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        mx: 'auto',
                        backgroundColor: bgColor
                    }}
                >
                    <Grid justifyContent={'space-around'}  columns={16} container direction={'row'}>
                        <Grid xs={4} item>{leftTop}</Grid>
                        <Grid xs={4}item>{centerTop}</Grid>
                        <Grid xs={4}item>{rightTop}</Grid>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                            {text}
                        </Typography>
                        {copyright}
                    </Container>
                </Box>

    );
}