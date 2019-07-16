import React from 'react';
import './App.scss';
import {
  useRandomPhotos,
  useSearchForm,
  useFeatureToggle,
  useOrientationSelect,
} from './utils/hooks';
import PhotoCard from './components/PhotoCard';
import SearchInput from './components/SearchInput';

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
            <SearchInput
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
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
        </div>
      </section>
    </div>
  );
}

export default App;
