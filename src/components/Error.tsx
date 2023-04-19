import { Alert } from '@mui/material'

export default function Error() {
  return (
    <Alert severity="error" sx={{ my: 5, p: 3, borderRadius: 4 }}>
      Not Found !
    </Alert>
  )
}
