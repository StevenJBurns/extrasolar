import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  fetchDistinctHostStars,
  fetchAllPlanets,
} from 'services/http/fetchNasaData';
// import { useDispatch } from 'react-redux';
// import { getStarsThunk, getPlanetsThunk } from 'state/actions/data';
// import { AppSnackbar } from '../AppSnackbar/AppSnackbar';
import {
  PageHome,
  PageData,
  PageSystems,
  PageBookmarks,
  PageAbout,
  Page404,
} from 'components/pages';
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
        <Route path="/data" element={<PageData />} />
        <Route path="/systems" element={<PageSystems />} />
        <Route path="/bookmarks" element={<PageBookmarks />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="*" element={<Page404 title="Page Not Found" />} />
      </Routes>
      {/* <AppSnackbar hasErrors={hasErrors} /> */}
    </>
  );
};
