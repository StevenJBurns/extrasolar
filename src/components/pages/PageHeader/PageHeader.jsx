import React from "react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
  Typography
} from '@material-ui/core/';
import { selectLastDataFetch } from '../../../redux/selectors/selectLastDataFetchDatetime';
import { useOnlineStatus } from '../../../hooks/useOnlineStatus';
import { AudioToggleButton } from "../../ui/AudioToggleButton";
import MenuIcon from '@material-ui/icons/Menu';
import AppLogo from "../../../assets/logo/extrasolar.png";
import './PageHeader.scss';
import { useSelector } from "react-redux";

export const PageHeader = () => {
  /* for React Router NavLink active styling */
  const activeStyle = { display: 'none' };

  const isOnline = useOnlineStatus();

  const lastFetch = useSelector(selectLastDataFetch());

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const useStyles = makeStyles(theme =>
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
          minWidth: '120px',
        },
        '& a' : {
          color: '#1F1F1F',
        },
      },
      menuList: {
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
      }
    })
  );

  const classes = useStyles();

  const handleHamburgerClick = e => setIsDrawerOpen(!isDrawerOpen);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {/* <Hidden xsDown>
          <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
        </Hidden> */}
        <Grid container direction="column" style={{flexGrow: 1}}>
          <Typography className={classes.header} variant="h3" noWrap>ExtraSolar</Typography>
          <Typography className={classes.header} variant="h6" noWrap>Exoplanet Data Visualization</Typography>
          <Typography className={classes.header} paragraph noWrap>{lastFetch.toString()}</Typography>
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
      <Drawer className={classes.drawer} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} variant='temporary'>
        <MenuList >
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
      </Drawer>
    </AppBar>
  );
};

export default PageHeader;
