import {InputAdornment, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import * as Search from '../../api/search.api'
import {useDebounce} from '../../hooks/use-debounce.jsx'

function SearchInput({ handleSearchResults }) {
  const debounce = useDebounce();

  const searchAnime = async (title) => {
      try {
        const response = await Search.searchAnime(title);
        handleSearchResults(response.data)
      } catch(error) {

        console.log(error);
      }
    };

  function handleSearch(e) {
    const input = e.target.value;
    debounce(
      searchAnime,
      300
    )(input)
  }

  return (
    <TextField
      onChange={handleSearch}
      id="input-with-search-icon"
      placeholder="Search anime..."
      variant="outlined"
      size="small"
      sx={{
        margin: '0 30px',
        '& .MuiSvgIcon-root': {
          color: 'white'
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{
              color: 'white'
          }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchInput;