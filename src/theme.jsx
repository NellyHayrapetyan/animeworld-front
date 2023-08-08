import {colors, createTheme} from '@mui/material'
import itachi from './assets/itachi.jpeg'

export const Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        primary: {
          root: {
            ':focus': {
              outline: 'none'
            }
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '.MuiDialogTitle-root': {
            color: 'white',
          },
          '.MuiPaper-root': {
            background: `linear-gradient(to top, #265c55 50%, #2a2c318a 100%), url(${itachi})`,
            minWidth: '450px',
            borderRadius: 20,

            '.MuiTypography-root': {
              color: 'white',
            }
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.MuiFormControl-root': {
            '.MuiFormLabel-root': {
              color: 'white',
              fontSize: 18,
              opacity: 0.5,
              '&.Mui-focused': {
                color: '#ffffff',
                opacity: 1
              },
              '&.Mui-error': {
                color: 'red',
                opacity: 1
              }
            },
            'fieldset': {
              border: 'none',
            },
            '.MuiInputBase-root': {
              backgroundColor: 'white',
              height: 45,
              borderRadius: '4px 4px 0 0',
              marginTop: 25,
              '&.MuiOutlinedInput-root': {
                marginTop: 0,
                backgroundColor: 'transparent',
                borderRadius: 4,
                border: '1px solid white',
                color: 'white',
              },
            }
          },
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-base': {
            color: 'white',
          }
        }
      }
    }
  },
  typography: {
    fontFamily: 'Montserrat,Arial'
  },
  palette: {
    primary: {
      main: '#b39e6b'
    },
    secondary: {
      main: colors.red[900]
    }
  }
})