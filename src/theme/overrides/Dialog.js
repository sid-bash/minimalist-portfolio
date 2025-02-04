export default function Dialog(theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
        },
        paper: {
          minWidth: '40%',
        },
        container: {
          '& .MuiPaper-root': {
            overflowY: 'unset',
            '& .MuiDialogTitle-root': {
            },
            '& .MuiDialogContent-root': {
              overflowY: 'auto',
            },
          },
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
          width: 600,
        },
      },
    },
  };
}
