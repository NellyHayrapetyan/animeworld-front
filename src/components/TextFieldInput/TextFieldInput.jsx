import {InputAdornment, TextField} from '@mui/material'

function TextFieldInput({ label, placeholder }) {
  return (
    <TextField
      id="email-input-with-textfield"
      label={label}
      InputProps={{
        placeholder: placeholder,
        startAdornment: (
          <InputAdornment position="start">
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  )
}

export default TextFieldInput;