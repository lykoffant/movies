import { Close as CloseIcon } from '@mui/icons-material';
import { Alert, Collapse, IconButton } from '@mui/material';
import { ReactNode, useState } from 'react';

interface ErrorAlertProps {
  children: ReactNode;
}

function ErrorAlert({ children }: ErrorAlertProps) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Collapse in={open}>
      <Alert
        severity='error'
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {children}
      </Alert>
    </Collapse>
  );
}

export { ErrorAlert };
