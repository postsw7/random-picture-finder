import { useState, useEffect } from 'react';
import API from '../api';
const MAX_COUNT = 30;

export function useRandomPhotos({
  query = '',
  featured = false,
  orientation = '',
}) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const params = {
      count: MAX_COUNT,
      featured,
    };

    if (orientation !== '') {
      params.orientation = orientation;
    }

    if (query !== '') {
      params.query = query;
    }

    async function getRandomPhotos() {
      const { data } = await API.get('/photos/random', { params });
      setPhotos(data);
    }

    getRandomPhotos();
  }, [featured, orientation, query]);

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

export function useFeatureToggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = event => {
    event.persist();
    setIsToggled(isToggled => !isToggled);
  };

  return {
    handleToggleChange,
    isToggled,
  };
}

export function useOrientationSelect() {
  const [orientation, setOrientation] = useState('');

  const handleSelectChange = event => {
    event.persist();
    setOrientation(event.target.value);
  };

  return {
    handleSelectChange,
    orientation,
  };
}
