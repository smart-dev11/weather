import { getCurrentWeather } from '@/util/helper'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { city } = req.query

    const weather = await getCurrentWeather(city)

    res.status(200).json({ weather })
  } catch (error) {
    res.status(500).json({ error })
  }
}
