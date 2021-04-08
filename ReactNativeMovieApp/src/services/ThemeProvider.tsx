import * as React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { theme } from '../presentation/theme'

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <>{children}</>
  </StyledComponentsThemeProvider>
);