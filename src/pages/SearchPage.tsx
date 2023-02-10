import { CircularProgress, Container, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

import { FoundList } from '../components/FoundList';

import { OutletContextType } from '../components/Layout';
import { SearchForm } from '../components/SearchForm';
import { useAppSelector } from '../hooks/useAppSelector';

function SearchPage() {
  const { sx } = useOutletContext<OutletContextType>();
  const isLoading = useAppSelector((state) => state.foundList.isLoading);

  return (
    <Container
      component='main'
      maxWidth='md'
      sx={{ ...sx, py: 4, display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant='h1' className='visually-hidden'>
        Search
      </Typography>

      <SearchForm />

      {isLoading ? <CircularProgress sx={{ m: 'auto' }} /> : <FoundList />}
    </Container>
  );
}

export { SearchPage };
