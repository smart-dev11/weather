import SearchForm from '@/components/SearchForm'
import WeatherCard from '@/components/WeatherCard'
import config from '@/config'
import { fetcher } from '@/util/fetcher'
import { MappedWeather } from '@/util/helper'
import { Box, Container, Paper } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'

function WeatherApp() {
  const [location, setLocation] = useState(config.DEFAULT_CITY)
  const [isSearching, setIsSearching] = useState(false)

  const { data: currentWeatherData, error: weatherError } = useSWR<{ weather: MappedWeather }>(`/api/weather/${location}`, fetcher)

  const handleSearchWeather = (city: string) => {
    if (!city) return
    setLocation(city)
  }

  return (
    <Paper sx={{ p: 4, borderRadius: 4 }}>
      <SearchForm handleSearchWeather={handleSearchWeather} />
      {currentWeatherData && <WeatherCard weather={currentWeatherData?.weather} />}
    </Paper>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundImage: `url('https://littlevisuals.co/images/dunham.jpg')`,
          backgroundSize: 'cover'
        }}
      >
        <Container maxWidth="sm" sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <WeatherApp />
        </Container>
      </Box>
    </>
  )
}

// export async function getStaticProps() {
//   const currentWeather = await getCurrentWeather()

//   return {
//     props: {
//       fallback: {
//         currentWeatherApiUrl: currentWeather,
//       },
//     },
//   };
// }
