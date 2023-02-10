import { Link, LinkProps } from '@mui/material';
import { ReactElement } from 'react';

interface RepoLinkProps extends LinkProps {
  icon: ReactElement;
}

function RepoLink({ icon, sx, ...props }: RepoLinkProps) {
  return (
    <Link
      sx={{
        ...sx,
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      {...props}
    >
      {icon}
    </Link>
  );
}

export { RepoLink };
