import { CircularProgress, Container } from '@mui/material';
import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { DetailedItem } from '../components/DetailedItem';
import { ErrorAlert } from '../components/ErrorAlert';
import { OutletContextType } from '../components/Layout';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getDetailedItemData } from '../store/detailedItemSlice';

function DetailsPage() {
  const dispatch = useAppDispatch();
  const { sx } = useOutletContext<OutletContextType>();
  const { id } = useParams();
  const details = useAppSelector((state) => state.detailedItem.data);
  const isLoading = useAppSelector((state) => state.detailedItem.isLoading);
  const error = useAppSelector((state) => state.detailedItem.error);

  useEffect(
    () => {
      if (id) {
        dispatch(getDetailedItemData({ id }));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Container
      component='main'
      maxWidth='md'
      sx={{ ...sx, py: 4, display: 'flex', flexDirection: 'column' }}
    >
      {error && <ErrorAlert>{error}</ErrorAlert>}

      {isLoading && <CircularProgress sx={{ m: 'auto' }} />}

      {details && <DetailedItem details={details} />}
    </Container>
  );
}

export { DetailsPage };
