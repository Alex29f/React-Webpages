import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Theme, createTheme } from "@mui/material";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const defaultTheme = createTheme(); // Using MUI's default theme as a starting point

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(defaultTheme);

    // This function allows setting a new theme dynamically
    const updateTheme = useCallback((newTheme: Theme) => {
        setTheme(newTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme: updateTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }
    return context;
};
