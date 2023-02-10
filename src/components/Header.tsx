import { GitHub as GitHubIcon } from '@mui/icons-material';
import { AppBar, Box, Toolbar } from '@mui/material';

import { HeaderName } from './HeaderName';
import { LogoIcon } from './LogoIcon';
import { RepoLink } from './RepoLink';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LogoIcon sx={{ mr: 1 }} />
          <HeaderName name={'OMDb Client'} />
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
