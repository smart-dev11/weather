import Home from '@/pages'
import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Home', () => {
  it('renders search input successfully', () => {
    render(<Home />)

    expect(screen.getByTestId('search-button')).toBeInTheDocument()
    expect(screen.getByTestId('city-input')).toBeInTheDocument()
  })
})
