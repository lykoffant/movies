import { GitHub as GitHubIcon } from '@mui/icons-material';
import { AppBar, AppBarProps, Box, Toolbar } from '@mui/material';

import { BackButton } from './BackButton';

import { HeaderName } from './HeaderName';
import { LogoIcon } from './LogoIcon';
import { RepoLink } from './RepoLink';

interface HeaderProps extends AppBarProps {
  pageName?: string;
}

function Header({ pageName, ...props }: HeaderProps) {
  return (
    <AppBar position='static' {...props}>
      <Toolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {pageName ? (
            <>
              <BackButton sx={{ ml: '-10px' }} />
              <HeaderName name={pageName} />
            </>
          ) : (
            <>
              <LogoIcon sx={{ mr: 1 }} />
              <HeaderName name={'OMDb Client'} />
            </>
          )}
        </Box>

        <RepoLink
          href='https://github.com/lykoffant/movies'
          icon={<GitHubIcon />}
        />
      </Toolbar>
    </AppBar>
  );
}

export { Header };
