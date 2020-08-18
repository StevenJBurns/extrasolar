import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Hidden,
  Drawer,
  Divider,
  Grid,
  MenuList,
  MenuItem,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core/';
import { selectLastDataFetch } from 'state/selectors/selectLastDataFetchDatetime';
import { useOnlineStatus } from 'hooks/useOnlineStatus';
import { AudioToggleButton } from "../../ui/AudioToggleButton";
import MenuIcon from '@material-ui/icons/Menu';
import './PageHeader.scss';

export const PageHeader = () => {
  const { pathname } = useLocation();
  const lastFetch = useSelector(selectLastDataFetch());
  const isOnline = useOnlineStatus();

  const useStyles = makeStyles(() =>
    ({
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
        paper: {
          width: '280px',
          backgroundColor: 'palegoldenrod',
        },
        '& a' : {
          color: '#1F1F1F',
        },
      },
      menuList: {
        width: '240px',
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
    })
  );
  
  const classes = useStyles();
  /* for React Router NavLink active styling */
  const activeStyle = { display: 'none' };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleHamburgerClick = e => setIsDrawerOpen(!isDrawerOpen);

  React.useEffect(() => setIsDrawerOpen(false), [pathname]);

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container direction="column" style={{flexGrow: 1}}>
          <Typography className={classes.header} variant="h3" noWrap>ExtraSolar</Typography>
          <Typography className={classes.header} variant="h6" noWrap>Exoplanet Data Visualization</Typography>
          <Typography className={classes.header} paragraph noWrap>{new Date(lastFetch).toLocaleString("en-US")}</Typography>
        </Grid>
        <Hidden xsDown>
          <MenuList>
            <MenuItem className={classes.menuItem}>
              <NavLink exact to="/" className={classes.link} activeStyle={activeStyle}>
                Home
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink exact to="/data" className={classes.link} activeStyle={activeStyle}>
                Data
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink exact to="/systems" className={classes.link} activeStyle={activeStyle}>
                Systems
              </NavLink>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <NavLink exact to="/about" className={classes.link} activeStyle={activeStyle}>
                About
              </NavLink>
            </MenuItem>
          </MenuList>
        </Hidden>
        <Hidden xsDown>
          <AudioToggleButton />
        </Hidden>
        <Hidden smUp>
          <IconButton style={{padding: 0, color: 'gainsboro'}} onClick={handleHamburgerClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        PaperProps={{className: classes.drawer.paper}}
        onClose={() => setIsDrawerOpen(false)} variant='temporary'
        open={isDrawerOpen}
      >
        <MenuList className={classes.menuList}>
          <MenuItem>
            <NavLink to='/'>Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/data'>Data</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/systems'>Systems</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/about'>About</NavLink>
          </MenuItem>
        </MenuList>
        <Divider />
      </Drawer>
    </AppBar>
  );
};

export default PageHeader;
