import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import animeWorld from '../../assets/animeworld.png'
import classes from './Navbar.module.scss'
import Input from '../Input/Input'
import { Theme } from '../../theme'
import SignInModal from '../SignInModal/SigninModal.jsx'

function Navbar() {
  const [dialogVisible, setDialogVisible] = useState(false);

  function dialogVisibilityHandler() {
    setDialogVisible(!dialogVisible);
  }

  return <ThemeProvider theme={Theme}>
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img className={classes.logo} src={animeWorld} alt="Anime World logo"></img>
        <Link className={classes.webTitle} to={'./'}>ANIME WORLD</Link>
        <Input />
        <Link to={'./series'} className={classes.tabs}>TV-SERIES</Link>
        <Link to={'./movies'} className={classes.tabs}>MOVIES</Link>
      </div>
      <div className={classes.navbarRight}>
        <Button variant="contained"  onClick={dialogVisibilityHandler}>Login</Button>
      </div>
    </div>

    {dialogVisible && <SignInModal onDialogClose={dialogVisibilityHandler}/>}
    <Outlet />
  </ThemeProvider>;
}

export default Navbar;