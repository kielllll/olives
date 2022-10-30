import Header from './Header'
import { Box } from '@mantine/core'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ width: '100vw' }}>
      <Header />
      {children}
    </Box>
  )
}

export default Layout
