import React from 'react';
import { PhotoCard } from 'components';
import {
  string,
  number,
  object,
  arrayOf,
  objectOf,
  shape,
  oneOfType,
} from 'prop-types';

const Column = ({ items }) => (
  <div className='columns is-mobile is-multiline is-centered'>
    {items.map(photo => {
      return (
        <div className='column is-one-third' key={photo.id}>
          <PhotoCard
            picture={photo.urls.small}
            original_picture={photo.urls.raw}
            profile_image={photo.user.profile_image.small}
            name={photo.user.name}
            username={photo.user.username}
            description={photo.description}
            alt_description={photo.alt_description}
            downloads={photo.downloads}
            likes={photo.likes}
          />
        </div>
      );
    })}
  </div>
);

export default Column;

Column.propTypes = {
  items: arrayOf(
    shape({
      id: string,
      description: string,
      alt_description: string,
      urls: objectOf(string),
      likes: number,
      user: objectOf(oneOfType([string, number, object])),
      downloads: number,
    })
  ),
};
