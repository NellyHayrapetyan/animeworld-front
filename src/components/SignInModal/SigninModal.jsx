import Login from '../Login/Login.jsx'
import CreateAccount from '../CreateAccount/CreateAccount.jsx'
import {useState} from 'react'

function SignInModal({ onDialogClose }) {
  const [dialogOpen, setLoginOpen] = useState({ login: true, registration: false });

  function openRegistrationHandler() {
    setLoginOpen({ login: false, registration: true });
  }

  function openLoginHandler() {
    setLoginOpen({ login: true, registration: false });
  }

  return (
    <>
      { dialogOpen.login && <Login openRegistration={openRegistrationHandler} isLoginOpen={dialogOpen.login} onClose={onDialogClose}></Login> }
      { dialogOpen.registration && <CreateAccount openLogin={openLoginHandler} isRegistrationOpen={dialogOpen.registration} onClose={onDialogClose}></CreateAccount> }
    </>
  );
}

export default SignInModal;