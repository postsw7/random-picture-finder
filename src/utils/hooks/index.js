import { useState, useEffect } from 'react';
import API from '../api';
const MAX_COUNT = 30;

export function useRandomPhotos(query = '') {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const params = {
      params: {
        count: MAX_COUNT,
        query,
      },
    };

    async function getRandomPhotos() {
      const { data } = await API.get('/photos/random', params);
      setPhotos(data);
    }

    getRandomPhotos();
  }, [query]);

  return photos;
}

export function useSearchForm() {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    setQuery(value);
  };

  const handleInputChange = event => {
    event.persist();
    setValue(event.target.value);
  };

  return {
    handleSubmit,
    handleInputChange,
    query,
  };
}
