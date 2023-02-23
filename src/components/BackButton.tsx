import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BackButton(props: IconButtonProps<'a'>) {
  const navigate = useNavigate();

  return (
    <IconButton
      component='a'
      color='inherit'
      aria-label='go back'
      onClick={() => navigate(-1)}
      {...props}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}

export { BackButton };
