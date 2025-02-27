import { createContext, ReactNode, useContext, useState } from 'react'

export type ColorTheme = 'light' | 'dark';

export type ColorThemeContext = {
    theme: ColorTheme;
    setTheme: (theme: ColorTheme) => void;
    toggle: () => void;
}


export const colorThemeContext = createContext<ColorThemeContext>({} as ColorThemeContext);

export const useColorThemeContext = () => useContext(colorThemeContext);

export const ColorThemeProvider = (props: {children?: ReactNode }) => {
    const [theme, setTheme] = useState<ColorTheme>('light');

    function toggle() {
        setTheme(prev => prev === 'light' ? 'dark': 'light')
    }
    return <colorThemeContext.Provider value = {{ theme, setTheme, toggle }}>
        {props.children}
    </colorThemeContext.Provider>
}