import { CircularProgress, Container, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

import { ErrorAlert } from '../components/ErrorAlert';

import { FoundList } from '../components/FoundList';

import { OutletContextType } from '../components/Layout';
import { SearchForm } from '../components/SearchForm';
import { useAppSelector } from '../hooks/useAppSelector';

function SearchPage() {
  const { sx } = useOutletContext<OutletContextType>();
  const isLoading = useAppSelector((state) => state.foundList.isLoading);
  const error = useAppSelector((state) => state.foundList.error);

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

      {error && <ErrorAlert>{error}</ErrorAlert>}

      {isLoading ? <CircularProgress sx={{ m: 'auto' }} /> : <FoundList />}
    </Container>
  );
}

export { SearchPage };
