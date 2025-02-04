export default function Switch() {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        track: {
          borderRadius: 22,
        },
        thumb: {
          boxShadow: 'none',
          width: 16,
          height: 16,
          margin: 2,
        },
      },
    },
  };
}
