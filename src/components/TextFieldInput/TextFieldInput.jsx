import {InputAdornment, TextField} from '@mui/material'
import React from 'react'


function TextFieldInput({ type, label, placeholder, onBlur, value, onChange, error, helperText}) {

  return (
    <TextField
      type={type}
      error={error}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      helperText={helperText}
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