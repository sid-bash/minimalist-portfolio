import { createTheme } from "@mui/material/styles";
import palette from "./palette";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: palette.light.primary,
    },
    secondary: {
      main: palette.light.secondary,
    },
    background: {
      default: palette.light.background,
      paper: palette.light.cardBackground,
    },
    text: {
      primary: palette.light.text,
    },
    divider: palette.light.border,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: palette.dark.primary,
    },
    secondary: {
      main: palette.dark.secondary,
    },
    background: {
      default: palette.dark.background,
      paper: palette.dark.cardBackground,
    },
    text: {
      primary: palette.dark.text,
    },
    divider: palette.dark.border,
  },
});
