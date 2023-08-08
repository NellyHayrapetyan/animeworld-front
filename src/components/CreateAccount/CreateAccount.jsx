import {
  Button,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import classes from './CreateAccount.module.scss'
import TextFieldInput from '../TextFieldInput/TextFieldInput.jsx'
import { Form } from 'react-router-dom'
import {
  useInput,
  Required,
  EmailValidation,
  PasswordValidation,
} from '../../hooks/use-input.js'
import * as User from '../../api/user.api.jsx'

function CreateAccount({ openLogin, onClose, isRegistrationOpen = false}) {
  const {
    value: nameValue,
    isValid: nameIsValid,
    handleInputChange: handleNameChange,
    reset: nameReset
  } = useInput([Required]);
  const {
    value: emailValue,
    isValid: emailIsValid,
    handleInputChange: handleEmailChange,
    reset: emailReset
  } = useInput([Required, EmailValidation]);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    handleInputChange: handlePasswordChange,
    reset: passwordReset
  } = useInput([Required, PasswordValidation]);
  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    handleInputChange: handleConfirmPasswordChange,
    reset: confirmPasswordReset
  } = useInput([], (value) => value === passwordValue);
  async function signUpHandler(e) {
    e.preventDefault();
    const formData = {
      id: Date.now(),
      name: nameValue,
      email: emailValue,
      password: passwordValue
    }

    if (!nameIsValid || !emailIsValid || !passwordIsValid || !confirmPasswordIsValid) {
      return;
    }

    try {
      await User.signUp(formData);


      openLogin();
      nameReset();
      emailReset();
      passwordReset();
      confirmPasswordReset();
    } catch(e) {
      console.log(e);
      console.log(e);
    }
  }

  return (
    <Dialog open={isRegistrationOpen} onClose={onClose}>
      <DialogTitle className={classes.dialogTitle}  sx={{ fontWeight: 900}}>Create an Account!</DialogTitle>
      <Form onSubmit={signUpHandler}>
        <DialogContent className={classes.dialogContent} sx={{ gap: '15px' }}>
          <TextFieldInput
            placeholder="Name"
            label="YOUR NAME"
            value={nameValue}
            error={!nameIsValid.isValid}
            helperText={nameIsValid.message}
            onChange={handleNameChange}
          ></TextFieldInput>
          <TextFieldInput
            placeholder="name@email.com"
            label="EMAIL ADDRESS"
            value={emailValue}
            error={!emailIsValid.isValid}
            helperText={emailIsValid.message}
            onChange={handleEmailChange}
          ></TextFieldInput>
          <TextFieldInput
            type="password"
            placeholder="Password"
            label="PASSWORD"
            value={passwordValue}
            error={!passwordIsValid.isValid}
            helperText={passwordIsValid.message}
            onChange={handlePasswordChange}
          ></TextFieldInput>
          <TextFieldInput
            type="password"
            placeholder="Confirm Password"
            label="CONFIRM PASSWORD"
            value={confirmPasswordValue}
            error={!confirmPasswordIsValid.isValid}
            helperText={confirmPasswordIsValid.message}
            onChange={handleConfirmPasswordChange}
          ></TextFieldInput>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <div className={classes.buttonWrapper}>
            <Button variant="outlined" sx={{ width: '100%'}} onClick={onClose}>CANCEL</Button>
            <Button variant="contained" sx={{ width: '100%'}} type="submit">SIGN UP</Button>
          </div>
          <p>
            Have an account? <span onClick={openLogin} className={classes.login}>Login</span>
          </p>
        </DialogActions>
      </Form>
    </Dialog>
  );
}

export default CreateAccount;