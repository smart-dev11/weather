import { Button, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchForm() {
  const router = useRouter()
  const [city, setCity] = useState('')

  const handleClickSearch = () => {
    if (city) {
      router.push(`/${city}`)
    }
  }

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        placeholder="Enter a city name..."
        value={city}
        onChange={e => setCity(e.target.value)}
        fullWidth
        inputProps={{ 'data-testid': 'city-input' }}
      />
      <Button data-testid="search-button" onClick={handleClickSearch} sx={{ borderRadius: '50%', p: 2 }}>
        <SearchIcon />
      </Button>
    </Stack>
  )
}
