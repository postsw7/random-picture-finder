import { useState, useEffect, useRef } from 'react';
import API from '../api';
const MAX_COUNT = 30;

export function useRandomPhotos({
  query = '',
  featured = false,
  orientation = '',
}) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const { data } = await API.get('/photos/random', { params });
      setPhotos(data);
      setIsLoading(false);
    }

    getRandomPhotos();
  }, [featured, orientation, query]);

  return { photos, isLoading };
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

export function useIntersect({ root = null, rootMargin, threshold = 0 }) {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      // Stop watching and load the image
      currentObserver.unobserve(entry.target);
    }

    return () => currentObserver.disconnect();
  }, [entry.isIntersecting, entry.target, node]);

  function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
      return;
    }
    img.src = src;
  }

  return [setNode];
}
