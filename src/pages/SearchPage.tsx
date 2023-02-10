import { Container, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

import { OutletContextType } from '../components/Layout';

function SearchPage() {
  const { sx } = useOutletContext<OutletContextType>();

  return (
    <Container
      component='main'
      maxWidth='md'
      sx={{ ...sx, py: 4, display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant='h1' className='visually-hidden'>
        Search
      </Typography>
    </Container>
  );
}

export { SearchPage };
