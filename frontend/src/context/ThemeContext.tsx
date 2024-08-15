// src/context/ThemeContext.tsx
import React, { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#081e44",
  textAlt: "#20a3fe",
  hover: "#a0c0da83",
  boxShadow: "0 0 1px 1px #a0c0da83 inset",
  boxShadowAlt:
    "rgba(50, 50, 93, 0.25) 0px 0px 7px -2px,rgba(0, 0, 0, 0.25) 0px 3px 10px -3px;",
};

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
