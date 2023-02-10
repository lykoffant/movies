import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/system';

interface HeaderNameProps extends TypographyProps {
  name: string;
}

function HeaderName({ name, ...props }: HeaderNameProps) {
  return (
    <Typography variant='h6' component='span' {...props}>
      {name}
    </Typography>
  );
}

export { HeaderName };
