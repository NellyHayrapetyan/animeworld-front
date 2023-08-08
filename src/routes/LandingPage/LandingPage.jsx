import {useOutletContext} from 'react-router-dom'
import AnimeCard from '../../components/AnimeCard/AnimeCard.jsx'
import classes from './LandingPage.module.scss'

function LandingPage() {
  const result = useOutletContext();
  return <div className={classes.animes}>
    {result.searchResults && result.searchResults.map((anime) =>
      <AnimeCard key={anime.title} data={anime}></AnimeCard>)
    }
  </div>
}

export default LandingPage;