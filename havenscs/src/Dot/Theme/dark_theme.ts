import {createTheme} from "@mui/material/styles";
import { baseTheme } from "./base_theme";
import {STYLES_DARK} from "./theme_settings";

const themeDark = createTheme(baseTheme,{
    typography:{
        h1: {
            fontFamily: STYLES_DARK.HEADING_FONT_FAMILY,
            fontSize: '4rem',
            fontWeight: 'bold',
            color: STYLES_DARK.PRIMARY_COLOR,
            [baseTheme.breakpoints.up('xs')]: {
                fontSize: '3rem', // Smaller font size for h1 on small screens
            },[baseTheme.breakpoints.up('sm')]: {
                fontSize: '3.5rem', // Smaller font size for h1 on small screens
            },[baseTheme.breakpoints.up('md')]: {
                fontSize: '4rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('lg')]: {
                fontSize: '4.5rem', // Larger font size for h1 on medium and larger screens
            },
            [baseTheme.breakpoints.up('xl')]: {
                fontSize: '10rem', // Larger font size for h1 on medium and larger screens
            },
        },
        h2: {
            fontFamily: STYLES_DARK.HEADING_FONT_FAMILY,
            fontSize: '3.5rem',
            color: STYLES_DARK.PRIMARY_COLOR,
            [baseTheme.breakpoints.up('xs')]: {
                fontSize: '1.8rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('sm')]: {
                fontSize: '2.5rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '3rem', // Larger font size for h1 on medium and larger screens
            },[baseTheme.breakpoints.up('lg')]: {
                fontSize: '3.5rem', // Larger font size for h1 on medium and larger screens
            },[baseTheme.breakpoints.up('xl')]: {
                fontSize: '4rem', // Larger font size for h1 on medium and larger screens
            },
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: STYLES_DARK.HEADING_FONT_FAMILY,
            fontSize: '3rem',
            fontWeight: 'bold',
            color: STYLES_DARK.PRIMARY_COLOR,
            [baseTheme.breakpoints.up('xs')]: {
                fontSize: '1.8rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('sm')]: {
                fontSize: '2rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '2.5rem', // Larger font size for h1 on medium and larger screens
            },[baseTheme.breakpoints.up('lg')]: {
                fontSize: '3rem', // Larger font size for h1 on medium and larger screens
            },[baseTheme.breakpoints.up('xl')]: {
                fontSize: '3.5rem', // Larger font size for h1 on medium and larger screens
            },
        },
        h4: {
            fontFamily: STYLES_DARK.HEADING_FONT_FAMILY,
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: STYLES_DARK.PRIMARY_COLOR,
            [baseTheme.breakpoints.up('xs')]: {
                fontSize: '1.5rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.3rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.5rem', // Larger font size for h1 on medium and larger screens
            },[baseTheme.breakpoints.up('lg')]: {
                fontSize: '2rem', // Larger font size for h1 on medium and larger screens
            },[baseTheme.breakpoints.up('xl')]: {
                fontSize: '2.5rem', // Larger font size for h1 on medium and larger screens
            },
        },
        h5: {
            fontFamily: STYLES_DARK.HEADING_FONT_FAMILY,
            fontSize: '2rem',
            fontWeight: 'bold',
            color: STYLES_DARK.PRIMARY_COLOR,
        },
        h6: {
            fontFamily: STYLES_DARK.HEADING_FONT_FAMILY,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: STYLES_DARK.PRIMARY_COLOR,
        },
        body1: {
            fontFamily: STYLES_DARK.BODY_FONT_FAMILY,
            fontSize: '1rem',
            color: STYLES_DARK.INFO_COLOR,
            [baseTheme.breakpoints.up('xs')]: {
                fontSize: '1rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.2rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.2rem', // Larger font size for h1 on medium and larger screens
            },
            [baseTheme.breakpoints.up('lg')]: {
                fontSize: '1.1rem', // Larger font size for h1 on medium and larger screens
            },
            [baseTheme.breakpoints.up('xl')]: {
                fontSize: '1.5rem', // Larger font size for h1 on medium and larger screens
            },
        },
        body2: {
            fontFamily: STYLES_DARK.BODY_FONT_FAMILY,
            fontSize: '1.5rem',
            color: STYLES_DARK.INFO_COLOR,
            [baseTheme.breakpoints.up('xs')]: {
                fontSize: '1rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.2rem', // Smaller font size for h1 on small screens
            },
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.3rem', // Larger font size for h1 on medium and larger screens
            },
            [baseTheme.breakpoints.up('lg')]: {
                fontSize: '1.5rem', // Larger font size for h1 on medium and larger screens
            },
            [baseTheme.breakpoints.up('xl')]: {
                fontSize: '1.5rem', // Larger font size for h1 on medium and larger screens
            },

        },
        button: {
            textTransform: 'none'
        }

    },
    palette: {
        primary: {
            main: STYLES_DARK.PRIMARY_COLOR,
        },
        secondary: {
            main: STYLES_DARK.SECONDARY_COLOR,
        },
        warning: {
            main: STYLES_DARK.WARNING_COLOR,
        },
        success: {
            main: STYLES_DARK.SUCCESS_COLOR,
        },
        info:{
            main:STYLES_DARK.INFO_COLOR
        },
        background:{
            default:STYLES_DARK.BACKGROUND_COLOR,
            paper:STYLES_DARK.PAPER_COLOR
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: STYLES_DARK.BUTTON_PRIMARY_BACKGROUND_COLOR,
                    color: STYLES_DARK.BUTTON_PRIMARY_COLOR,
                },
                containedSecondary: {
                    backgroundColor: STYLES_DARK.BUTTON_SECONDARY_BACKGROUND_COLOR,
                    color: STYLES_DARK.BUTTON_SECONDARY_COLOR,
                },
                outlinedPrimary: {
                    color: STYLES_DARK.BUTTON_OUTLINED_PRIMARY_COLOR,
                    border: STYLES_DARK.BUTTON_OUTLINED_PRIMARY_BORDER,
                },
            }},
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    fontSize: '10rem',
                    [baseTheme.breakpoints.up('xs')]: {
                        fontSize: '4rem',
                    },
                    [baseTheme.breakpoints.up('sm')]: {
                        fontSize: '4rem',
                    },
                    [baseTheme.breakpoints.up('md')]: {
                        fontSize: '6rem',
                    },
                    [baseTheme.breakpoints.up('lg')]: {
                        fontSize: '8rem',
                    },
                    [baseTheme.breakpoints.up('xl')]: {
                        fontSize: '10rem',
                    },
                },
                fontSizeMedium: {
                    fontSize: '4rem',
                    [baseTheme.breakpoints.up('xs')]: {
                        fontSize: '2rem',
                    },
                    [baseTheme.breakpoints.up('sm')]: {
                        fontSize: '2.5rem',
                    },
                    [baseTheme.breakpoints.up('md')]: {
                        fontSize: '3rem',
                    },
                    [baseTheme.breakpoints.up('lg')]: {
                        fontSize: '3.5rem',
                    },
                    [baseTheme.breakpoints.up('xl')]: {
                        fontSize: '4rem',
                    },
                },
                fontSizeSmall: {
                    fontSize: '2rem',
                    [baseTheme.breakpoints.up('xs')]: {
                        fontSize: '1.1rem',
                    },
                    [baseTheme.breakpoints.up('sm')]: {
                        fontSize: '1.3rem',
                    },
                    [baseTheme.breakpoints.up('md')]: {
                        fontSize: '1rem',
                    },
                    [baseTheme.breakpoints.up('lg')]: {
                        fontSize: '1.2rem',
                    },
                    [baseTheme.breakpoints.up('xl')]: {
                        fontSize: '1.3rem',
                    },
                },
            },

        },
        MuiIconButton: {
            styleOverrides: {
                sizeLarge: {
                    [baseTheme.breakpoints.up('xs')]: {
                        height: '2rem',
                        width: '2rem',
                    },
                    [baseTheme.breakpoints.up('sm')]: {
                        height: '4rem',
                        width: '4rem',
                    },
                    [baseTheme.breakpoints.up('md')]: {
                        height: '6rem',
                        width: '6rem',
                    },
                    [baseTheme.breakpoints.up('lg')]: {
                        height: '8rem',
                        width: '8rem',
                    },
                    [baseTheme.breakpoints.up('xl')]: {
                        height: '10rem',
                        width: '10rem',
                    },
                }
            }
        },
    },

});

export default themeDark;