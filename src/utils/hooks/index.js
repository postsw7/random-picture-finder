import { useState, useEffect } from 'react';
import API from '../api';
const MAX_COUNT = 30;

export function useRandomPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const params = {
      params: {
        count: MAX_COUNT,
      },
    };

    async function getRandomPhotos() {
      const { data } = await API.get('/photos/random', params);
      setPhotos(photos => [...photos, ...data]);
    }

    getRandomPhotos();
  }, []);

  return photos;
}
