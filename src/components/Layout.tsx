import { Box, SxProps } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export type OutletContextType = { sx: SxProps };

function Layout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Outlet context={{ sx: { flexGrow: 1 } }} />
    </Box>
  );
}

export { Layout };
