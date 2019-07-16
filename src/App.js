import React from 'react';
import './App.scss';
import {
  useRandomPhotos,
  useSearchForm,
  useFeatureToggle,
  useOrientationSelect,
} from './utils/hooks';

function App() {
  const { handleSubmit, handleInputChange, query } = useSearchForm();
  const { handleToggleChange, isToggled } = useFeatureToggle();
  const { handleSelectChange, orientation } = useOrientationSelect();
  const randomPhotos = useRandomPhotos({
    query,
    featured: isToggled,
    orientation,
  });

  return (
    <div className='App'>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Random Picture Finder</h1>
            <h2 className='subtitle'>BresoTec Assignment</h2>
            <div className='control'>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleInputChange}
                  className='input is-primary is-rounded search-input'
                  type='text'
                  placeholder='Search high-resolution random photos'
                />
              </form>
            </div>
            <div className='field'>
              <input
                id='switchRoundedDefault'
                type='checkbox'
                name='switchRoundedDefault'
                className='switch is-rounded'
                defaultChecked={isToggled}
                onChange={handleToggleChange}
              />
              <label htmlFor='switchRoundedDefault'>
                Switch rounded default
              </label>
            </div>
            <div className='field'>
              <div className='control'>
                <div className='select is-rounded is-info'>
                  <select onChange={handleSelectChange}>
                    <option>Select Orientation</option>
                    <option value='landscape'>Landscape</option>
                    <option value='portrait'>Portrait</option>
                    <option value='squarish'>Squarish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='columns is-multiline'>
        {randomPhotos.map(photo => {
          return (
            <div className='column is-one-fifth' key={photo.id}>
              <figure>
                <a
                  href={photo.urls.raw}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={photo.urls.thumb} alt={photo.alt_description} />
                </a>
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
