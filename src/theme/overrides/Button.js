export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        sizeSmall: {
          fontSize: 14,
          padding: "6px 16px",
        },
        sizeMedium: {
          fontSize: 17,
          padding: "2px 20px",
        },
        sizeLarge: {
          width: "100%",
          fontSize: 18,
          padding: "2px 20px",
        },
        outlinedPrimary: {
          color: theme.palette.primary.text,
          borderColor: theme.palette.primary.border,
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
            borderColor: theme.palette.primary.lighter,
          },
        },
      },
    },
  };
}
