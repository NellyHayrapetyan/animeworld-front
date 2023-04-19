import {InputAdornment, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Input() {
  return (
    <TextField
      id="input-with-search-icon"
      placeholder="Search anime..."
      variant="outlined"
      size="small"
      sx={{
        margin: '0 30px',
        '& .MuiSvgIcon-root': {
          color: 'white'
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Input;