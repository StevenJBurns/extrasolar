import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
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
import { List, ListItem, Stack } from '@mui/material';

export const PageHeader: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  // const isOnline = useOnlineStatus();
  // const formattedLastFetch = formatLastFetch(lastFetch);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleHamburgerClick = () => setIsDrawerOpen(!isDrawerOpen);

  const setActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'lime' : undefined,
  });

  useEffect(() => setIsDrawerOpen(false), [pathname]);

  return (
    <AppBar sx={{ color: 'azure', backgroundColor: '#1F1F1F', position: 'static' }}>
      <Toolbar>
        <Grid container direction="column" style={{ flexGrow: 1 }}>
          <Typography variant="h5">ExtraSolar</Typography>
          {/* <Typography className={classes.header} paragraph noWrap>{formattedLastFetch}</Typography> */}
        </Grid>
        <Hidden smDown>
          <List
            component={Stack}
            direction="row"
            sx={{
              '& a': {
                textDecoration: 'none',
              },
            }}
          >
            <ListItem>
              <NavLink to="/" style={setActiveStyle}>
                <Typography>HOME</Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/data" style={setActiveStyle}>
                <Typography>DATA</Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/systems" style={setActiveStyle}>
                <Typography>SYSTEMS</Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/bookmarks" style={setActiveStyle}>
                <Typography>BOOKMARKS</Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/about" style={setActiveStyle}>
                <Typography>ABOUT</Typography>
              </NavLink>
            </ListItem>
          </List>
        </Hidden>
        <Hidden xsDown>
          <AudioToggleButton />
        </Hidden>
        <Hidden smUp>
          <IconButton style={{ padding: 0, color: 'gainsboro' }} onClick={handleHamburgerClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            minWidth: '90%',
            backgroundColor: '#3d3d3d',
          },
        }}
      >
        <MenuList>
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
