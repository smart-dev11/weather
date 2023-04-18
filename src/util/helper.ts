import axios from 'axios'
import config from '@/config'

const api = axios.create({
  baseURL: config.API_URL
})

export type Weather = {}

export async function getCurrentWeather(city?: string | string[]) {
  const { data } = await api.get(`/weather?q=${city || config.DEFAULT_CITY}&appid=${config.API_KEY}`)

  return data
}

export function mapResponseProperties(data: any) {
  const mapped: Weather = {
    location: data.name,
    temperature: Math.round(data.main.temp)
  }

  return mapped
}
