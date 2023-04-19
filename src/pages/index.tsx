import Error from '@/components/Error'
import Loading from '@/components/Loading'
import SearchForm from '@/components/SearchForm'
import WeatherCard from '@/components/WeatherCard'
import config from '@/config'
import { fetcher } from '@/util/fetcher'
import { getCurrentWeather, MappedWeather } from '@/util/helper'
import { Box, Container, Paper } from '@mui/material'
import Head from 'next/head'
import { PropsWithChildren, useState } from 'react'
import useSWR, { SWRConfig } from 'swr'

function WeatherApp() {
  const [location, setLocation] = useState(config.DEFAULT_CITY)

  const {
    data: currentWeatherData,
    error: weatherError,
    isLoading
  } = useSWR<{ weather: MappedWeather }>(`/api/weather/${location}`, fetcher)

  const handleSearchWeather = (city: string) => {
    if (!city) return
    setLocation(city)
  }

  return (
    <Paper sx={{ p: 4, borderRadius: 4 }}>
      <SearchForm handleSearchWeather={handleSearchWeather} />
      {weatherError ? <Error /> : isLoading || !currentWeatherData ? <Loading /> : <WeatherCard weather={currentWeatherData?.weather} />}
    </Paper>
  )
}

export default function Home({ fallback }: PropsWithChildren<{ fallback: Record<string, MappedWeather | null> }>) {
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
          backgroundImage: 'linear-gradient(to left, #03A9F4, #B3E5FC)',
          backgroundSize: 'cover'
        }}
      >
        <SWRConfig value={{ fallback }}>
          <Container maxWidth="sm" sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <WeatherApp />
          </Container>
        </SWRConfig>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const currentWeather = await getCurrentWeather()
  const currentWeatherUrl = `/api/weather/${config.DEFAULT_CITY}`

  return {
    props: {
      fallback: {
        [currentWeatherUrl]: currentWeather
      }
    }
  }
}
