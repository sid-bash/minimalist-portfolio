export default function Chip(theme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
        colorInfo: {
          backgroundColor: theme.palette.primary.lighter,
          color: theme.palette.primary.main,
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          color: theme.palette.grey[0],
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        colorSecondary: {
          backgroundColor: theme.palette.grey[0],
          borderColor: theme.palette.primary.lighter,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: `${theme.palette.primary.lighter} !important`,
          },
        },
        colorWarning: {
          backgroundColor: theme.palette.warning.light,
        },
        colorSuccess: {
          backgroundColor: theme.palette.success.light,
        },
      },
    },
  };
}
