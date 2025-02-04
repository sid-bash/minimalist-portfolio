export default function ButtonGroup(theme) {
  return {
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
        groupedContained: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.lighter,
          borderColor: `${theme.palette.primary.light} !important`,
          '&:hover': {
            color: theme.palette.primary.lighter,
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
  };
}
