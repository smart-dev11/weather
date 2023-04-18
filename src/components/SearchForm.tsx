import { Box, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

interface Props {
  handleSearchWeather(city: string): void
}

export default function SearchForm({ handleSearchWeather }: Props) {
  const [city, setCity] = useState('')

  const handleClickSearch = () => {
    if (city) {
      handleSearchWeather(city)
      setCity('')
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <TextField placeholder="Enter a city name..." value={city} onChange={e => setCity(e.target.value)} fullWidth />
      <IconButton onClick={handleClickSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  )
}
