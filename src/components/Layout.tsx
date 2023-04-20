import { Box, Container, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Weather App</title>
      </Head>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(to left, #03A9F4, #B3E5FC)',
          backgroundSize: 'cover'
        }}
      >
        <Container maxWidth="sm" sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <Paper sx={{ p: 4, borderRadius: 4 }}>{children}</Paper>
        </Container>
      </Box>
    </>
  )
}
