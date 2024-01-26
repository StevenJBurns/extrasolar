// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { changeAudioSource } from 'state/actions/ui';
// import { LinearProgress } from '@mui/material';
// import { Page } from '../Page/Page.component';
import { PageHeader, PageFooter } from '..';
import { Canvas } from '../../canvas';
import { Box, Typography } from '@mui/material';
// import SystemsOGG from 'assets/audio/systems.ogg';

export const PageSystems = () => (
  <>
    <Box sx={{ position: 'static' }}>
      <Canvas />
      <PageHeader />
      <Box position={'absolute'} zIndex={1} color={'azure'}>
        <Typography variant="body2">Planet Count</Typography>
        <Typography variant="body2">Binary Star?</Typography>
        <Typography variant="body2">Stellar Mass</Typography>
        <Typography variant="body2">Stellar Radius</Typography>
        <Typography variant="body2">Stellar Temperature</Typography>
        <PageFooter />
      </Box>
    </Box>
    {/* <Page {...props}>
        { isFetchingStars && <LinearProgress />}
        <div id="main-solarsystems">
          <Canvas selectedSolarSystem={selectedSolarSystem} />
          <h3>{`SELECTED SOLAR SYSTEM: ${selectedSolarSystem ?? null}`}</h3>
          <div id="div-filters">
            <div id="div-filter-stars">
              <h5 className="slider-label">Planet Count</h5>
              <h5 className="slider-label">Binary Star?</h5>
              <h5 className="slider-label">Stellar Mass</h5>
              <h5 className="slider-label">Stellar Radius</h5>
              <h5 className="slider-label">Stellar Temperature</h5>
              <section id="section-container"></section>
            </div>
            <div id="div-filter-planets">
              <h5 className="slider-label">Planet Orbital Eccentricity</h5>
              <h5 className="slider-label">Planetary Orbit Semi-Major Axis</h5>
              <h5 className="slider-label">Planetary Orbit Period</h5>
            </div>
            <ul></ul>
          </div>
        </div>
      </Page> */}
  </>
);
