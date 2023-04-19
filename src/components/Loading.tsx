import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'

export default function Loading() {
  return (
    <>
      <Stack spacing={3} px={2} py={4}>
        <Skeleton variant="rectangular" height={100} />
        <Skeleton variant="rectangular" height={50} />
      </Stack>
      <Stack spacing={3} p={4} sx={{ background: '#E2E8F0', borderRadius: 4 }}>
        <Skeleton variant="rectangular" height={30} />
        <Skeleton variant="rectangular" height={30} />
        <Skeleton variant="rectangular" height={30} />
      </Stack>
    </>
  )
}
