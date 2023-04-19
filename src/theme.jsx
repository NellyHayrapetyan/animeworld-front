import {colors, createTheme} from '@mui/material'

export const Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ':focus': {
            outline: 'none'
          }
        }
      }
    },
    MuiTextField: {

      styleOverrides: {
        root: {
          color: 'white',
          border: '1px solid white',
          borderRadius: 4,
          'fieldset': {
            border: 'none',
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'white',
        }
      }
    },
  },
  palette: {
    primary: {
      main: colors.red[900]
    },
    secondary: {
      main: '#b39e6b'
    }
  }
})