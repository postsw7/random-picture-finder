import React from 'react';
import { PhotoCard } from 'components';

const Column = ({ items }) => (
  <div className='columns is-multiline is-mobile is-centered'>
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
