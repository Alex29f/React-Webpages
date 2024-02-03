import { createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {

            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '4rem',
            fontWeight: 'bold',
        },
        h2: {
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '3.5rem',
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        h4: {
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        h6: {
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        body1: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '1.2rem',
            fontWeight: 'bold',
        },
    },
    palette: {
        background: {
            default: '#1e0178',
            paper: '#ffffff',
        },
        primary: {
            main: '#1e0178',
        },
        secondary: {
            main: '#ffffff',
        },
        warning: {
            main: '#E1B168',
        },
        success: {
            main: '#292E36',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
            containedPrimary: {
                backgroundColor: '#1e0178',
                color: '#ffffff',
                fontFamily: "'Open Sans', sans-serif",

            },
            outlinedPrimary: {
                color: '#292E36',
                fontFamily: "'Open Sans', sans-serif",
                border: '1px solid #E1B168',
            },
        }},
    },
});

export default theme;