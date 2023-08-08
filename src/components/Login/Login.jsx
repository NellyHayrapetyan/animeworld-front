import {
  Button,
  DialogTitle,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from '@mui/material'
import classes from './Login.module.scss'
import TextFieldInput from '../TextFieldInput/TextFieldInput.jsx'
import {
  EmailValidation,
  PasswordValidation,
  Required,
  useInput,
} from '../../hooks/use-input.js'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogIn } from '../../store/user/user.reducer'

function Login({ openRegistration, isLoginOpen, onClose }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const {
    value: emailValue,
    isValid: emailIsValid,
    handleInputChange: handleEmailChange,
    reset: emailReset
  } = useInput([Required, EmailValidation])
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    handleInputChange: handlePasswordChange,
    reset: passwordReset
  } = useInput([Required, PasswordValidation])

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue
    }

    try {
      dispatch(userLogIn(formData));

      onClose();
      passwordReset();
      emailReset();
    } catch(error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  }

  return (<Dialog open={isLoginOpen} onClose={onClose}>
    <DialogTitle className={classes.dialogTitle} sx={{ fontWeight: 900}}>Welcome Back!</DialogTitle>
    <form onSubmit={handleFormSubmit}>
      <DialogContent
        className={classes.dialogContent}
        sx={{ gap: '15px' }}
      >
        <TextFieldInput
          placeholder="name@email.com"
          label="EMAIL ADDRESS"
          value={emailValue}
          error={!emailIsValid.isValid}
          helperText={emailIsValid.message}
          onChange={handleEmailChange}
        ></TextFieldInput>
        <TextFieldInput
          placeholder="Password"
          label="PASSWORD"
          value={passwordValue}
          error={!passwordIsValid.isValid}
          helperText={passwordIsValid.message}
          onChange={handlePasswordChange}
        ></TextFieldInput>
        <div className={classes.loginFooter}>
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox/>
            }
          />
          <span className={classes.forgotPassword}>Forgot Password?</span>
        </div>

        {errorMessage && <div className={classes.errorMessage}>{errorMessage}</div>}
      </DialogContent>
      <DialogActions className={classes.actions}>
        <div className={classes.buttonWrapper}>
          <Button variant="outlined" sx={{ width: '100%'}} onClick={onClose}>CANCEL</Button>
          <Button
            variant="contained"
            sx={{ width: '100%'}}
            type="submit"
            disabled={!(emailIsValid.isValid && passwordIsValid.isValid)}
          >LOGIN</Button>
        </div>
        <p>
          Don't have an account? <span onClick={openRegistration} className={classes.register}>Register</span>
        </p>
      </DialogActions>
    </form>
  </Dialog>);
}

export default Login;