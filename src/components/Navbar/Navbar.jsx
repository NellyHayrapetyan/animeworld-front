import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import animeWorld from '../../assets/animeworld.png'
import classes from './Navbar.module.scss'
import { Theme } from '../../theme'
import SignInModal from '../SignInModal/SigninModal'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userLogOut } from '../../store/user/user.reducer.js'
import SearchInput from '../SearchInput/SearchInput.jsx'

function Navbar() {
  const [searchResults, setSearchResults ] = useState();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [dialogVisible, setDialogVisible] = useState(false);

  function dialogVisibilityHandler() {
    setDialogVisible(!dialogVisible);
  }

  function handleSearchResults(animes) {
    setSearchResults(animes);
  }

  function logoutHandler() {
    dispatch(userLogOut(user.email));
  }

  return <ThemeProvider theme={Theme}>
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img className={classes.logo} src={animeWorld} alt="Anime World logo"></img>
        <Link className={classes.webTitle} to={'./'}>ANIME WORLD</Link>
        <SearchInput handleSearchResults={handleSearchResults} />
        <Link to={'./series'} className={classes.tabs}>TV-SERIES</Link>
        <Link to={'./movies'} className={classes.tabs}>MOVIES</Link>
      </div>
      <div className={classes.navbarRight}>
        { !user && <Button variant="contained" onClick={dialogVisibilityHandler}>Login</Button>}
        { user && <Button variant="contained" onClick={logoutHandler}>Logout</Button>}
      </div>
    </div>

    {dialogVisible && <SignInModal onDialogClose={dialogVisibilityHandler} />}
    <Outlet context={{searchResults}}/>
  </ThemeProvider>;
}

export default Navbar;