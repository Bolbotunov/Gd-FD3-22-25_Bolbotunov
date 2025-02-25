import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { siteColors } from '../styles/siteColors';

const SiteColorsContext = createContext(siteColors);

export const SiteColorsProvider = ({ children }: { children: ReactNode }) => (
    <SiteColorsContext.Provider value={siteColors}>
        <StyledThemeProvider theme={siteColors}>
            {children}
        </StyledThemeProvider>
    </SiteColorsContext.Provider>
);

export const useColor = () => useContext(SiteColorsContext);
