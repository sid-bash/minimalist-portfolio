// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#2F5BB2',
          },
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
          '&[type="search"]': {
            MozAppearance: 'textfield',
            '&::-webkit-search-cancel-button': {
              display: 'none',
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        '& .MuiContainer-root': {
          maxWidth: '100% !important',
        },
      }}
    />
  );

  return inputGlobalStyles;
}
