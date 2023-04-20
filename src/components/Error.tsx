import { Alert, Box, Link } from '@mui/material'
import NextLink from 'next/link'

export default function Error() {
  return (
    <>
      <Alert severity="error" sx={{ my: 5, p: 3, borderRadius: 4 }} data-testid="error">
        Not Found !
      </Alert>
      <Box mt={3} textAlign="right">
        <Link component={NextLink} href="/">
          Go Back
        </Link>
      </Box>
    </>
  )
}
