import React from 'react';
// import { useDispatch } from 'react-redux';
// import { changeAudioSource } from 'state/actions/ui';
// import { LinearProgress } from '@mui/material';
import { Page } from '../Page/Page.component';
import { PageHeader, PageFooter } from '..';
import { Canvas } from '../../canvas';
// import SystemsOGG from 'assets/audio/systems.ogg';
import './PageSolarSystems.scss';

type TProps = {
  selectedSolarSystem?: string;
};

export const PageSystems = (props: TProps) => {
  // const dispatch = useDispatch();
  // const isFetchingStars = useSelector(state => state.data.stars.isFetching);

  const { selectedSolarSystem } = props;

  // React.useEffect(() => {
  //   dispatch(changeAudioSource(SystemsOGG));
  // }, [dispatch]);

  return (
    <>
      <PageHeader />
      <Canvas />
      <Page {...props}>
        {/* { isFetchingStars && <LinearProgress />} */}
        <div id="main-solarsystems">
          {/* <Canvas selectedSolarSystem={selectedSolarSystem} /> */}
          <h3>
            SELECTED SOLAR SYSTEM:{' '}
            {selectedSolarSystem ? selectedSolarSystem : null}
          </h3>
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
      </Page>
      <PageFooter />
    </>
  );
};

// const mapStateToProps = state => {
//   const { selectedSolarSystem } = state.ui;
//   const { stars, planets } = state.data;
//   return { stars, planets, selectedSolarSystem };
// };

// const mapDispatchToProps = dispatch => ({
//   changeSelectedSystem: newSystem => dispatch(changeSelectedSolarSystem(newSystem)),
//   changeAudioSource: audioSource => dispatch(changeAudioSource(audioSource))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);
