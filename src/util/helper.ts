import axios from 'axios'
import config from '@/config'

const api = axios.create({
  baseURL: config.API_URL
})

export type MappedWeather = {
  icon: string
  location: string
  country: string
  temperature: number
  feelsLike: number
  humidity: number
  windSpeed: number
}

export async function getCurrentWeather(city?: string | string[]) {
  const { data } = await api.get(`/weather?q=${city || config.DEFAULT_CITY}&appid=${config.API_KEY}&units=metric`)

  return data ? mapResponseProperties(data) : null
}

export function mapResponseProperties(data: any): MappedWeather {
  const mapped: MappedWeather = {
    location: data.name,
    country: data.sys.country,
    temperature: Math.floor(data.main.temp),
    icon: data.weather[0].icon,
    feelsLike: Math.floor(data.main.feels_like),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed
  }

  return mapped
}
