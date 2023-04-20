import { MappedWeather } from '@/util/helper'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function WeatherCard({ weather }: PropsWithChildren<{ weather: MappedWeather }>) {
  const iconTime = weather.icon.replace(/[0-9\n]/g, '')
  console.log('WeatherCard', weather)

  return (
    <Box>
      <Stack spacing={3} px={3} py={4}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ background: iconTime === 'n' ? '#A0AEC0' : '#ECC94B', borderRadius: '50%' }} mr={2}>
            <Image
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              width={60}
              height={60}
              alt={weather.icon}
              loading="lazy"
            />
          </Box>
          <Typography variant="body1" data-testid="location">{`${weather.location}, ${weather.country}`}</Typography>
        </Box>

        <Typography variant="h4" color="primary">
          {`${weather.temperature} °C`}
        </Typography>
      </Stack>
      <Stack spacing={3} p={4} sx={{ background: '#E2E8F0', borderRadius: 4 }}>
        <Typography variant="body1">{`Feels like ${weather.feelsLike} °C`}</Typography>
        <Typography variant="body1">{`Humidity ${weather.feelsLike}%`}</Typography>
        <Typography variant="body1">{`Wind Speed: ${weather.feelsLike} m/s`}</Typography>
      </Stack>
    </Box>
  )
}
