import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  fetchDistinctHostStars,
  fetchAllPlanets,
} from 'services/http/fetchNasaData';
// import { useDispatch } from 'react-redux';
// import { getStarsThunk, getPlanetsThunk } from 'state/actions/data';
// import { AppSnackbar } from '../AppSnackbar/AppSnackbar';
import { PageHeader, PageFooter } from 'components/pages';
import {
  PageHome,
  PageData,
  PageSystems,
  PageBookmarks,
  PageAbout,
  Page404,
} from 'components/pages';
import { Canvas } from 'components/canvas';
import './App.scss';

// const HomeOGG = React.lazy(() => import('assets/audio/home.ogg'));
// const DataOGG = React.lazy(() => import('assets/audio/data.ogg'));
// const SystemsOGG = React.lazy(() => import('assets/audio/systems.ogg'));
// const AboutOGG = React.lazy(() => import('assets/audio/about.ogg'));

export const App = () => {
  // const dispatch = useDispatch();
  // const systems = useSelector(selectUniqueSystemIds());

  // const getData = React.useCallback(() => {
  //   dispatch(getStarsThunk());
  //   dispatch(getPlanetsThunk());
  // }, [dispatch]);

  React.useEffect(() => {
    const getStars = async () => {
      console.log('fetching');
      const data = await fetchDistinctHostStars();
      console.log(data);
    };

    const getPlanets = async () => {
      console.log('fetching');
      const data = await fetchAllPlanets();
      console.log(data);
    };

    getStars();
    getPlanets();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route
          path="/data"
          element={
            <>
              <PageHeader />
              <PageData />
              {/* <PageData title="Data" audioSource={DataOGG} /> */}
              <PageFooter />
            </>
          }
        />
        <Route
          path="/systems"
          element={
            <>
              <PageHeader />
              <Canvas />
              {/* <Canvas selectedSolarSystem={0} /> */}
              <PageSystems selectedSolarSystem="0" />
              {/* <PageSystems title="Solar Systems" audioSource={SystemsOGG} /> */}
              <PageFooter />
            </>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <>
              <PageHeader />
              <PageBookmarks />
              {/* <PageBookmarks title="Bookmarks" audioSource={AboutOGG} /> */}
              <PageFooter />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <PageHeader />
              <PageAbout />
              {/* <PageAbout title="About" audioSource={AboutOGG} /> */}
              <PageFooter />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageHeader />
              <Page404 title="Page Not Found" />
              <PageFooter />
            </>
          }
        />
      </Routes>
      {/* <AppSnackbar hasErrors={hasErrors} /> */}
    </>
  );
};
