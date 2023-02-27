import {
  Grid,
  GridProps,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { DetailedData } from '../types/detailed-response.types';

const Img = styled('img')({
  display: 'block',
  minWidth: '150px',
  maxWidth: '100%',
  objectFit: 'fill',
});

type Field = keyof Pick<
  DetailedData,
  'Genre' | 'Released' | 'Country' | 'Actors' | 'Director' | 'Runtime' | 'Plot'
>;

interface DetailedItemProps extends GridProps {
  details: DetailedData;
}

function DetailedItem({ details, ...props }: DetailedItemProps) {
  const fieldList: Field[] = [
    'Genre',
    'Released',
    'Country',
    'Actors',
    'Director',
    'Runtime',
    'Plot',
  ];

  return (
    <Grid container spacing={2} {...props}>
      <Grid item sm={4} sx={{ mx: 'auto' }}>
        <Paper elevation={3} sx={{ overflow: 'hidden' }}>
          <Img
            src={
              details.Poster !== 'N/A'
                ? details.Poster
                : `https://via.placeholder.com/300x445?text=${details.Title}`
            }
            alt={details.Title}
          />
        </Paper>
      </Grid>

      <Grid item xs sm={8} sx={{ minWidth: '280px' }}>
        <Typography component='h1' variant='h4'>
          {details.Title}
        </Typography>

        <List component='dl'>
          {fieldList.map((field) => (
            <ListItem key={field} component='div' disablePadding>
              <ListItemText
                primary={field}
                primaryTypographyProps={{ component: 'dt' }}
                secondary={details[field]}
                secondaryTypographyProps={{ component: 'dd' }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export { DetailedItem };
