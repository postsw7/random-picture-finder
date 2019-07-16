import React from 'react';
import './App.scss';
import {
  useRandomPhotos,
  useSearchForm,
  useFeatureToggle,
  useOrientationSelect,
} from 'utils/hooks';
import {
  PhotoCard,
  SearchInput,
  SelectInput,
  ToggleInput,
  Hero,
  Title,
} from 'components';

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
      <Hero>
        <Title
          title={'Random Picture Finder'}
          subtitle={'BresoTec Assignment'}
        />
        <SearchInput
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <ToggleInput
                isToggled={isToggled}
                handleToggleChange={handleToggleChange}
              />
            </div>
          </div>
          <div className='level-right'>
            <div className='level-item'>
              <SelectInput handleSelectChange={handleSelectChange} />
            </div>
          </div>
        </div>
      </Hero>
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
