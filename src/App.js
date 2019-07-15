import React from 'react';
import './App.scss';
import { useRandomPhotos } from './utils/hooks';

function App() {
  const randomPhotos = useRandomPhotos();

  return (
    <div className='App'>
      <div>Random Picture List</div>
      <div className='columns is-multiline'>
        {randomPhotos.map(photo => {
          return (
            <div className='column is-one-fifth' key={photo.id}>
              <figure>
                <img src={photo.urls.thumb} alt={photo.alt_description} />
                <figcaption>
                  {photo.description}
                  <p>Photographer: {photo.user.name}</p>
                  <p>Downloads: {photo.downloads}</p>
                  <p>Likes: {photo.likes}</p>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
