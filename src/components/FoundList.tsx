import { Box } from '@mui/material';

import { FoundItem } from './FoundItem';

import { useAppSelector } from '../hooks/useAppSelector';

function FoundList() {
  const foundList = useAppSelector((state) => state.foundList.list);

  return (
    <Box
      component='ul'
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem',
      }}
    >
      {foundList &&
        foundList.map((foundItem) => (
          <FoundItem key={foundItem.imdbID} itemData={foundItem} />
        ))}
    </Box>
  );
}

export { FoundList };
