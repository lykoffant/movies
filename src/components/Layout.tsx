import { Box, SxProps } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { BackToTopButton } from './BackToTopButton';

import { Header } from './Header';

interface LayoutProps {
  pageName: string;
}

export type OutletContextType = { sx: SxProps };

function Layout({ pageName }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header id='back-to-top-anchor' pageName={pageName} />

      <Outlet context={{ sx: { flexGrow: 1 } }} />

      <BackToTopButton />
    </Box>
  );
}

export { Layout };
