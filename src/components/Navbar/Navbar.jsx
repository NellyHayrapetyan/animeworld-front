import { Outlet } from 'react-router-dom'
import animeWorld from '../../assets/animeworld.png'
import classes from './Navbar.module.scss'
import Input from '../Input/Input'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import { Theme } from '../../theme'
function Navbar() {
  return <ThemeProvider theme={Theme}>
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img className={classes.logo} src={animeWorld} alt="Anime World logo"></img>
        <span className={classes.webTitle}>ANIME WORLD</span>
        <Input />
      </div>
      <div className={classes.navbarRight}>
        <Button variant="contained">Login</Button>
      </div>
    </div>
    <Outlet />
  </ThemeProvider>;
}

export default Navbar;