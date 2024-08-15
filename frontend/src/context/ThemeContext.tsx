// src/context/ThemeContext.tsx
import React, { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "../utils/theme";

interface ThemeContextType {
  theme: typeof lightTheme;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const theme = lightTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
