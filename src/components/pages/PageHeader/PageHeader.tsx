import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
// import { useOnlineStatus } from 'presentation/hooks/useOnlineStatus';
import { AudioToggleButton } from '../../ui/AudioToggleButton/AudioToggleButton';
import { styles } from './PageHeader.styles';
// import { formatLastFetch } from 'util/formatDate';

export const PageHeader: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  // const isOnline = useOnlineStatus();
  // const formattedLastFetch = formatLastFetch(lastFetch);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleHamburgerClick = () => setIsDrawerOpen(!isDrawerOpen);

  const setActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    display: isActive ? 'none' : undefined,
  });

  React.useEffect(() => setIsDrawerOpen(false), [pathname]);

  return (
    <AppBar position="relative" css={styles}>
      <Toolbar css={styles}>
        <Grid container direction="column" style={{ flexGrow: 1 }}>
          <Typography css={styles} variant="h3" noWrap>
            ExtraSolar
          </Typography>
          <Typography css={styles} variant="h6" noWrap>
            Exoplanet Data Visualization
          </Typography>
          {/* <Typography className={classes.header} paragraph noWrap>{formattedLastFetch}</Typography> */}
        </Grid>
        <Hidden xsDown>
          <MenuList>
            <MenuItem css={styles}>
              <NavLink to="/" css={styles} style={setActiveStyle}>
                Home
              </NavLink>
            </MenuItem>
            <MenuItem css={styles}>
              <NavLink to="/data" css={styles} style={setActiveStyle}>
                Data
              </NavLink>
            </MenuItem>
            <MenuItem css={styles}>
              <NavLink to="/systems" css={styles} style={setActiveStyle}>
                Systems
              </NavLink>
            </MenuItem>
            <MenuItem css={styles}>
              <NavLink to="/bookmarks" css={styles} style={setActiveStyle}>
                Bookmarks
              </NavLink>
            </MenuItem>
            <MenuItem css={styles}>
              <NavLink to="/about" css={styles} style={setActiveStyle}>
                About
              </NavLink>
            </MenuItem>
          </MenuList>
        </Hidden>
        <Hidden xsDown>
          <AudioToggleButton />
        </Hidden>
        <Hidden smUp>
          <IconButton
            style={{ padding: 0, color: 'gainsboro' }}
            onClick={handleHamburgerClick}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer
        css={styles}
        onClose={() => setIsDrawerOpen(false)}
        variant="temporary"
        open={isDrawerOpen}
      >
        <MenuList css={styles}>
          <NavLink to="/">
            <MenuItem>HOME</MenuItem>
          </NavLink>
          <NavLink to="/data">
            <MenuItem>DATA</MenuItem>
          </NavLink>
          <NavLink to="/systems">
            <MenuItem>SYSTEMS</MenuItem>
          </NavLink>
          <NavLink to="/about">
            <MenuItem>ABOUT</MenuItem>
          </NavLink>
        </MenuList>
      </Drawer>
    </AppBar>
  );
};

export default PageHeader;
