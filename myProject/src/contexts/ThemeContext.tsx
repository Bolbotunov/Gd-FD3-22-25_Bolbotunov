import React, { createContext, useState, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { appColors, lightAppColors } from '../styles/AppColors';

type ThemeContextType = {
  toggleTheme: () => void;
  isLight: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => setIsLight((prev) => !prev);

  const theme = isLight ? appColors : lightAppColors;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isLight }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useCustomTheme must be used within CustomThemeProvider');
  }
  return context;
};
