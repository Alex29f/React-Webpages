import React, {createContext, ReactNode, useCallback, useContext, useState} from 'react';
import themeDark from "../Dot/Theme/dark_theme";
import themeLight from "../Dot/Theme/light_theme";
import {Theme} from "@mui/material";


interface ThemeContextType {
    theme:  Theme;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
    children: ReactNode;

}


export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(themeDark);

    const setLightTheme = useCallback(() => {
        setTheme(themeLight);
    },[]);
    const setDarkTheme = useCallback(() => {
        setTheme(themeDark);
    },[]);


    return (
        <ThemeContext.Provider value={{
            theme,
            setLightTheme,
            setDarkTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within an ThemeContextProvider');
    }
    return context;
};
