import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  fetchDistinctHostStars,
  fetchAllPlanets,
  fetchNasaData,
} from 'services/http/fetchNasaData';
import {
  PageHome,
  PageData,
  PageSystems,
  PageBookmarks,
  PageAbout,
  Page404,
} from 'components/pages';
import './App.scss';

export const App = () => {
  React.useEffect(() => {
    const getStars = async () => {
      const data = await fetchDistinctHostStars();
      console.log(data);
    };

    const getPlanets = async () => {
      const data = await fetchAllPlanets();
      console.log(data);
    };

    // getStars();
    // getPlanets();
    fetchNasaData();
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
