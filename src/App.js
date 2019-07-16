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
            <div className='field'>
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
            </div>
            <div className='level'>
              <div className='level-left'>
                <div className='level-item'>
                  <div className='field'>
                    <input
                      id='featured-switch'
                      type='checkbox'
                      className='switch is-rounded'
                      defaultChecked={isToggled}
                      onChange={handleToggleChange}
                    />
                    <label className='label' htmlFor='featured-switch'>
                      Featured {isToggled ? 'On' : 'Off'}
                    </label>
                  </div>
                </div>
              </div>
              <div className='level-right'>
                <div className='level-item'>
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
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline is-mobile is-centered'>
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
      </section>
    </div>
  );
}

export default App;
