import Error from '@/components/Error'
import { Layout } from '@/components/Layout'
import WeatherCard from '@/components/WeatherCard'
import { getCurrentWeather, MappedWeather } from '@/util/helper'
import { GetServerSideProps } from 'next'

export default function City({ data }: { data: MappedWeather | null }) {
  if (!data) {
    return (
      <Layout>
        <Error />
      </Layout>
    )
  }

  return (
    <Layout>
      <WeatherCard weather={data} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: MappedWeather | null }> = async context => {
  const city = context.params?.city
  const data = city ? await getCurrentWeather(city) : null

  return {
    props: {
      data
    }
  }
}
