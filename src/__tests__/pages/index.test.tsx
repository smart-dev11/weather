import Home from '@/pages'
import { act, render, screen } from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Home', () => {
  it('renders search input successfully', () => {
    render(<Home />)
  })
})
