export default function Icon(theme) {
  return {
    MuiIcon: {
      styleOverrides: {
        colorPrimary: {
          color: theme.palette.primary.icon,
        },
      },
    },
  };
}
