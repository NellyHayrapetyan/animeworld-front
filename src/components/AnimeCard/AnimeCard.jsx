import classes from './AnimeCard.module.scss'

function AnimeCard({ data }) {
  const background = {
    background: `linear-gradient(to top, #265c55 10%, #2a2c318a 100%), url(${data.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div className={classes.animeWrapper} style={background}>
      <p>{data.title} <br/>{data.date}</p>
    </div>
  );
}

export default AnimeCard;