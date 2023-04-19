import { Box, Button, IconButton, Stack, TextField } from '@mui/material'
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
    <Stack direction="row" spacing={1}>
      <TextField placeholder="Enter a city name..." value={city} onChange={e => setCity(e.target.value)} fullWidth />
      <Button onClick={handleClickSearch} sx={{ borderRadius: '50%', p: 2 }}>
        <SearchIcon />
      </Button>
    </Stack>
  )
}
