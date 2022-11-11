import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Hidden,
  Drawer,
  Grid,
  MenuList,
  MenuItem,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useOnlineStatus } from 'presentation/hooks/useOnlineStatus';
import { AudioToggleButton } from '../../ui/AudioToggleButton';
// import { formatLastFetch } from 'util/formatDate';
import './PageHeader.scss';

export const PageHeader: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  const isOnline = useOnlineStatus();

  const useStyles = makeStyles(() => ({
    root: {
      background: 'linear-gradient(290deg, goldenrod 40%, darkgoldenrod 40%)',
    },
    toolbar: {
      padding: '1rem 2vw',
      justifyContent: 'center',
    },
    header: {
      margin: '0.25rem 1rem',
      color: isOnline ? 'white' : 'darkred',
    },
    drawer: {
      paper: {},
    },
    drawerPaper: {
      width: '280px',
      backgroundColor: 'darkgoldenrod',
    },
    menuList: {
      backgroundColor: 'transparent',
    },
    menuItem: {
      padding: 0,
      justifyContent: 'center',
      lineHeight: '2rem',
    },
    link: {
      height: '2rem',
      width: '8rem',
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center',
    },
  }));

  const classes = useStyles();

  // const formattedLastFetch = formatLastFetch(lastFetch);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleHamburgerClick = () => setIsDrawerOpen(!isDrawerOpen);

  const setActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    display: isActive ? 'none' : undefined,
  });

  React.useEffect(() => setIsDrawerOpen(false), [pathname]);

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container direction="column" style={{ flexGrow: 1 }}>
          <Typography className={classes.header} variant="h3" noWrap>
            ExtraSolar
          </Typography>
          <Typography className={classes.header} variant="h6" noWrap>
            Exoplanet Data Visualization
          </Typography>
          {/* <Typography className={classes.header} paragraph noWrap>{formattedLastFetch}</Typography> */}
        </Grid>
        <Hidden xsDown>
          <MenuList>
            <MenuItem className={classes.menuItem}>
              <NavLink to="/" className={classes.link} style={setActiveStyle}>
                Home
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink
                to="/data"
                className={classes.link}
                style={setActiveStyle}
              >
                Data
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink
                to="/systems"
                className={classes.link}
                style={setActiveStyle}
              >
                Systems
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink
                to="/bookmarks"
                className={classes.link}
                style={setActiveStyle}
              >
                Bookmarks
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink
                to="/about"
                className={classes.link}
                style={setActiveStyle}
              >
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
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setIsDrawerOpen(false)}
        variant="temporary"
        open={isDrawerOpen}
      >
        <MenuList className={classes.menuList}>
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
