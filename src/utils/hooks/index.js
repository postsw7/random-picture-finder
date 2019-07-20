import { useState, useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { masonry } from 'utils/lib/reformMasonry';
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
      imagesLoaded(document.querySelector('.masonry'), function() {
        /*
         * A maonsry grid with 2px gutter, with 3 columns on desktop,
         * 2 on tablet, and 1 column on mobile devices.
         */
        masonry('.masonry', '.column', 2, 3, 2, 1);
      });
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

export function useResizeMasonry() {
  function handleMasonry() {
    // Check if all the images finished loading
    imagesLoaded(document.querySelector('.masonry'), function() {
      /*
       * A maonsry grid with 8px gutter, with 3 columns on desktop,
       * 2 on tablet, and 1 column on mobile devices.
       */
      masonry('.masonry', '.column', 4, 3, 2, 1);
    });
  }
  useEffect(() => {
    /**
     * Reform the masonry
     *
     * Rebuild the masonry grid on every resize and load event after making sure
     * all the images in the grid are completely loaded.
     */
    ['resize', 'load'].forEach(function(event) {
      // Follow below steps every time the window is loaded or resized
      window.addEventListener(event, handleMasonry);
    });

    return () => {
      ['resize', 'load'].forEach(function(event) {
        // Follow below steps every time the window is loaded or resized
        window.removeEventListener(event, handleMasonry);
      });
    };
  }, []);
}
