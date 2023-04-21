import {
  Button, Checkbox,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle, FormControlLabel,
} from '@mui/material'
import classes from './Login.module.scss'
import TextFieldInput from '../TextFieldInput/TextFieldInput.jsx'

function Login({ openRegistration, isLoginOpen, onClose }) {
  return (<Dialog open={isLoginOpen} onClose={onClose}>
    <DialogTitle className={classes.dialogTitle} sx={{ fontWeight: 900}}>Welcome Back!</DialogTitle>
    <form>
      <DialogContent
        className={classes.dialogContent}
        sx={{ gap: '15px' }}
      >
        <TextFieldInput placeholder="name@email.com" label="EMAIL ADDRESS"></TextFieldInput>
        <TextFieldInput placeholder="Password" label="PASSWORD"></TextFieldInput>
        <div className={classes.loginFooter}>
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
              />
            }
          />
          <span className={classes.forgotPassword}>Forgot Password?</span>
        </div>
      </DialogContent>
    </form>
    <DialogActions className={classes.actions}>
      <div className={classes.buttonWrapper}>
        <Button variant="outlined" sx={{ width: '100%'}} onClick={onClose}>CANCEL</Button>
        <Button variant="contained" sx={{ width: '100%'}}>LOGIN</Button>
      </div>
      <p>
        Don't have an account? <span onClick={openRegistration} className={classes.register}>Register</span>
      </p>
    </DialogActions>
  </Dialog>);
}

export default Login;