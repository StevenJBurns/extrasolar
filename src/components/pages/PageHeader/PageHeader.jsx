import React from "react";
import { NavLink } from 'react-router-dom';
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
import { AudioToggleButton } from "../../ui/AudioToggleButton";
import MenuIcon from '@material-ui/icons/Menu';
import AppLogo from "../../../assets/logo/extrasolar.png";
import './PageHeader.scss';

export const PageHeader = () => {
  /* for React Router NavLink active styling */
  const activeStyle = { display: 'none' };

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

  const handleHamburgerClick = e => {
    console.log('onClick Hamburger');
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {/* <Hidden xsDown>
          <img id="app-logo" src={ AppLogo } alt="ExtraSolar Logo" />
        </Hidden> */}
        <Grid container direction="column" style={{flexGrow: 1}}>
          <Typography style={{margin: '0.25rem 1rem'}} variant="h3" noWrap>ExtraSolar</Typography>
          <Hidden xsDown>
            <Typography style={{margin: '0.25rem 1rem'}} variant="h6" noWrap>Exoplanet Data Visualization</Typography>
          </Hidden>
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
      <Drawer open={isDrawerOpen}>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Data</MenuItem>
          <MenuItem>Systems</MenuItem>
          <MenuItem>About</MenuItem>
        </MenuList>
      </Drawer>
    </AppBar>
  );
};

export default PageHeader;
