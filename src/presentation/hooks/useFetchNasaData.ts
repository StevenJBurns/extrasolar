import { useEffect } from 'react';
// import { fetchNasaData } from 'services/http/fetchNasaData';

export const useFetchNasaData = () => {
  // const [pending, setPending] = useState(false);
  // const [stars, setStars] = useState();
  // const [planets, setPlanets] = useState();
  // const [error, setError] = useState('');

  useEffect(() => {
    console.clear();
    // setPending(true);
    
    // fetchNasaData().then(async (responses: [unknown, unknown]) => {
    //     if (responses) {
    //       const [starsResponse, planetsresponse] = responses;

    //       setStars(await starsResponse.json());
    //       setPlanets(await planetsresponse.json());
    //     }
    //   })
    //   .catch((err: unknown) => console.error('Fetch failed: ', err))
    //   .finally(async () => {
    //     setPending(false);
    //     setError('No error');
    //     console.log('fetch complete');
    //   });
    }, []);

  // return {
  //   pending,
  //   stars,
  //   planets,
  //   error
  // };
};
