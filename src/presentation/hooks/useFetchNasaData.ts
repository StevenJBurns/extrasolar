import React from 'react';
import { fetchNasaData } from 'services/http/fetchNasaData';

export const useFetchNasaData = () => {
  React.useEffect(() => {
    const getData = async () => await fetchNasaData();
    console.log(getData());
  }, []);
};
