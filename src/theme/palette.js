import { alpha } from "@mui/material/styles";

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#6B7783",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  light: "#7E57C2",
  main: "#673AB7",
  dark: "#5E35B1",
  contrastText: "#FFFFFF",
};

const INFO = {
  light: "#9C27B0",
  main: "#7B1FA2",
  dark: "#4A148C",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#F1F8E9",
  light: "#4CAF50",
  main: "#2E7D32",
  dark: "#1B5E20",
  contrastText: "#FFFFFF",
};

const WARNING = {
  lighter: "#FFFDE7",
  light: "#FF9800",
  main: "#EF6C00",
  dark: "#E65100",
  contrastText: "#FFFFFF",
};

const ERROR = {
  lighter: "#FEEBEE",
  light: "#EF5350",
  main: "#D32F2F",
  dark: "#C62828",
  contrastText: "#FFFFFF",
};

const TEXT = {
  primary: "#000000DE",
  secondary: "#00000099",
  disabled: "#00000061",
  contrastText: "#FFFFFF",
};

const BACKGROUND = {
  paper: "#FFFFFF",
  default: GREY[100],
  neutral: GREY[200],
  icon: "rgba(103, 58, 183, 0.04)",
  main: "#FAF6FB",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: TEXT,
  background: BACKGROUND,
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
