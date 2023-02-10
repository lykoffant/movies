import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { FoundItemShortData as FoundItemShortData } from '../types/data.types';

interface FoundItemProps {
  itemData: FoundItemShortData;
}

function FoundItem({ itemData }: FoundItemProps) {
  return (
    <Card
      component='li'
      sx={{
        mb: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <CardMedia
        component='img'
        image={itemData.Poster}
        alt={itemData.Title}
        sx={{ mb: 'auto' }}
      />

      <Divider variant='middle' sx={{ mt: 2 }} />

      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {itemData.Title}
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          #{itemData.Type}
        </Typography>
      </CardContent>

      <CardActions>
        <Button component={RouterLink} to={`/details/${itemData.imdbID}`}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export { FoundItem };
