import City, { getServerSideProps } from '@/pages/[city]'
import { render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { MOCK_WEATHER } from '../../util/fixture'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Render weather for city', () => {
  it('renders weather successfully', async () => {
    render(<City data={MOCK_WEATHER} />)

    expect(screen.getByTestId('weather-card')).toBeInTheDocument()
    expect(screen.getByTestId('location').textContent).toBe('Dallas, US')
  })

  it('renders weather successfully for night', async () => {
    render(<City data={{ ...MOCK_WEATHER, icon: '02d' }} />)

    expect(screen.getByTestId('weather-card')).toBeInTheDocument()
    expect(screen.getByTestId('weather-img').getAttribute('alt')).toBe('02d')
  })

  it('renders error component', async () => {
    render(<City data={null} />)
    expect(screen.getByTestId('error')).toBeInTheDocument()
  })
})

describe('Server Side Props', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('gets weather successfully', async () => {
    const context = {
      params: { city: 'Dallas' } as ParsedUrlQuery
    }
    const value: any = await getServerSideProps(context as GetServerSidePropsContext)
    expect(value.props.data.location).toBe('Dallas')
    expect(value.props.data.country).toBe('US')
  })

  it('gets null for wrong city', async () => {
    const context = {
      params: { city: 'NonCity' } as ParsedUrlQuery
    }
    const value: any = await getServerSideProps(context as GetServerSidePropsContext)
    expect(value.props.data).toBeNull()
  })
})
