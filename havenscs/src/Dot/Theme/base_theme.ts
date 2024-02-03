import {createTheme} from "@mui/material/styles";
import {STYLES_LIGHT} from "./theme_settings";

export const baseTheme = createTheme({typography:{
        h1: {
            fontFamily: STYLES_LIGHT.HEADING_FONT_FAMILY,
            fontSize: '4rem',
            fontWeight: 'bold',
        },
        h2: {
            fontFamily:  STYLES_LIGHT.HEADING_FONT_FAMILY,
            fontSize: '3.5rem',
            fontWeight: 'bold',
        },
        h3: {
            fontFamily:  STYLES_LIGHT.HEADING_FONT_FAMILY,
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        h4: {
            fontFamily:  STYLES_LIGHT.HEADING_FONT_FAMILY,
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily:  STYLES_LIGHT.HEADING_FONT_FAMILY,
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        h6: {
            fontFamily:  STYLES_LIGHT.HEADING_FONT_FAMILY,
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        body1: {
            fontFamily:  STYLES_LIGHT.BODY_FONT_FAMILY,
            fontSize: '1rem',
        },
        body2: {
            fontFamily: STYLES_LIGHT.BODY_FONT_FAMILY,
            fontSize: '1.5rem',
        },

        button: {
            textTransform: 'none'
        }

    },
    palette: {
        primary: {
            main: STYLES_LIGHT.PRIMARY_COLOR,
        },
        secondary: {
            main: STYLES_LIGHT.SECONDARY_COLOR,
        },
        warning: {
            main: STYLES_LIGHT.WARNING_COLOR,
        },
        success: {
            main: STYLES_LIGHT.SUCCESS_COLOR,
        },
        info:{
            main:STYLES_LIGHT.INFO_COLOR
        },
        background:{
            default:STYLES_LIGHT.BACKGROUND_COLOR,
            paper:STYLES_LIGHT.PAPER_COLOR
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: STYLES_LIGHT.BUTTON_PRIMARY_BACKGROUND_COLOR,
                    color: STYLES_LIGHT.BUTTON_PRIMARY_COLOR,
                },
                containedSecondary: {
                    backgroundColor: STYLES_LIGHT.BUTTON_SECONDARY_BACKGROUND_COLOR,
                    color: STYLES_LIGHT.BUTTON_SECONDARY_COLOR,
                },
                outlinedPrimary: {
                    color: STYLES_LIGHT.BUTTON_OUTLINED_PRIMARY_COLOR,
                    border: STYLES_LIGHT.BUTTON_OUTLINED_PRIMARY_BORDER,
                },
            }},
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    fontSize: '4rem',
                },
                fontSizeSmall: {
                    fontSize: '1rem',
                },
            },
        },

    }});