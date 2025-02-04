// import { linearProgressClasses } from '@mui/material';

export default function LinearProgress(theme) {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 5,
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 10,
          '& .MuiLinearProgress-barColorSuccess': {
            backgroundColor: theme.palette.success.dark,
          },
        },
        colorPrimary: {
          borderRadius: 5,
          backgroundColor: theme.palette.secondary.mainColor,
        },
        colorSecondary: {
          borderRadius: 5,
          backgroundColor: theme.palette.grey[300],
        },
        colorSuccess: {
          borderRadius: 5,
          backgroundColor: theme.palette.grey[300],
        },
      },
    },
  };
}
