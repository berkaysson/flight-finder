import React, { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "../utils/theme";

// ThemeContext uygulama boyunca tanımlanan lightTheme objesini dağıtmaktadır,
// bu kullanım sayesinde temada değişiklikler kolaylaştırılıp ileriki süreçlerde darkTheme ekleme imkanı vardır.
// theme: src/utils/theme.ts

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
