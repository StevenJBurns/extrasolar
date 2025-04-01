import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { changeAudioSource } from 'state/actions/ui';
// import { LinearProgress } from '@mui/material';
import { PageHeader } from '../index.ts';
import { Canvas } from '../../canvas/index.ts';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
// import SolarSystemsPageSoundFile from 'assets/audio/systems.ogg';
import { dividerStyles } from './SolarSystems.styles.ts';

import { mockSolarSystemData } from '@presentation/data/mockSolarSystemDat.ts';

export const SolarSystems = () => {
  const [selectedSolarSystem, setSelectedSolarSystem] = useState(mockSolarSystemData[0].name);

  const handleChange = (e: SelectChangeEvent<string>) => setSelectedSolarSystem(e.target.value);

  return (
    <>
      <PageHeader />
      <Box sx={{ position: 'static' }}>
        <Canvas
          solarSystemData={
            mockSolarSystemData.find(system => system.name === selectedSolarSystem) ??
            mockSolarSystemData[0]
          }
        />
        <Box p={2} position={'absolute'} color={'azure'} zIndex={1}>
          <FormControl
            sx={{ my: 1, minWidth: 180, backgroundColor: '#292929' }}
            variant="filled"
            size="small"
          >
            <InputLabel>Selected System</InputLabel>
            <Select
              onChange={handleChange}
              value={selectedSolarSystem}
              sx={{
                color: '#f0f0f0',
              }}
            >
              {mockSolarSystemData
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map(s => (
                  <MenuItem key={s.name} value={s.name}>
                    {s.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Box mt={4}>
            {mockSolarSystemData
              .find(system => system.name === selectedSolarSystem)
              ?.stars.map(star => (
                <Box key={star.label}>
                  <Typography variant="body2">
                    {selectedSolarSystem} {star.label}
                  </Typography>
                  {/* <Typography variant="body2">Class: {star.class}</Typography>
                <Typography variant="body2">
                  Mass: {star.mass?.value ?? '--'} M<sub>&#9737;</sub>
                </Typography>
                <Typography variant="body2">
                  Radius: {star.radius?.value ?? '--'} R<sub>&#9737;</sub>
                </Typography>
                <Typography variant="body2">
                  Temperature: {star.temperature?.value ?? '--'}K
                </Typography> */}
                </Box>
              )) ?? <Typography>--</Typography>}
          </Box>
          <Divider sx={dividerStyles} />
          {mockSolarSystemData
            .find(system => system.name === selectedSolarSystem)
            ?.planets.map(planet => (
              <Box key={planet.label}>
                <Typography variant="body2">
                  {selectedSolarSystem} {planet.label}
                </Typography>
              </Box>
            ))}
          {/* <PageFooter /> */}
        </Box>
      </Box>
    </>
  );
};
