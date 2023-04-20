import Home from '@/pages'
import { act, fireEvent, render, screen } from '@testing-library/react'
import axios from 'axios'

const MOCK_WEATHER = {
  country: 'US',
  feelsLike: 24,
  humidity: 66,
  icon: '01n',
  location: 'Dallas',
  temperature: 24,
  windSpeed: 10.79
}

describe('Weather', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  test('renders error component', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({})

    await act(async () => {
      render(<Home fallback={{}} />)
    })
    expect(screen.getByTestId('error')).toBeInTheDocument()
  })

  test('renders app successfully with default city', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        weather: MOCK_WEATHER
      }
    })

    await act(async () => {
      render(<Home fallback={{}} />)
    })
    expect(screen.getByTestId('location').textContent).toBe('Dallas, US')
  })

  test('renders app successfully with input city', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        weather: { ...MOCK_WEATHER, location: 'Washington', icon: '02d' }
      }
    })

    render(<Home fallback={{}} />)
    await act(async () => {
      fireEvent.input(screen.getByTestId('city-input'), { target: { value: 'Washington' } })
      fireEvent.click(screen.getByTestId('search-button'))
    })
    expect(screen.getByTestId('location').textContent).toBe('Washington, US')
  })
})
