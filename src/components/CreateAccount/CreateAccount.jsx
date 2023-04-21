import {
  Button,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import classes from './CreateAccount.module.scss'
import TextFieldInput from '../TextFieldInput/TextFieldInput.jsx'

function CreateAccount({ openLogin, onClose, isRegistrationOpen = false}) {
  return (<Dialog open={isRegistrationOpen} onClose={onClose}>
    <DialogTitle className={classes.dialogTitle}  sx={{ fontWeight: 900}}>Create an Account!</DialogTitle>
    <form>
      <DialogContent className={classes.dialogContent} sx={{ gap: '15px' }}>
        <TextFieldInput placeholder="Name" label="YOUR NAME"></TextFieldInput>
        <TextFieldInput placeholder="name@email.com" label="EMAIL ADDRESS"></TextFieldInput>
        <TextFieldInput placeholder="Password" label="PASSWORD"></TextFieldInput>
        <TextFieldInput placeholder="Confirm Password" label="CONFIRM PASSWORD"></TextFieldInput>
      </DialogContent>
    </form>
    <DialogActions className={classes.actions}>
      <div className={classes.buttonWrapper}>
        <Button variant="outlined" sx={{ width: '100%'}} onClick={onClose}>CANCEL</Button>
        <Button variant="contained" sx={{ width: '100%'}}>SIGN UP</Button>
      </div>
      <p>
        Have an account? <span onClick={openLogin} className={classes.login}>Login</span>
      </p>
    </DialogActions>
  </Dialog>);
}

export default CreateAccount;