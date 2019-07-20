import React from 'react';
import './App.scss';
import {
  useRandomPhotos,
  useSearchForm,
  useFeatureToggle,
  useOrientationSelect,
  useResizeMasonry,
} from 'utils/hooks';
import {
  SearchInput,
  SelectInput,
  ToggleInput,
  Hero,
  Title,
  Section,
  Level,
  Column,
  Loading,
} from 'components';

function App() {
  const { handleSubmit, handleInputChange, query } = useSearchForm();
  const { handleToggleChange, isToggled } = useFeatureToggle();
  const { handleSelectChange, orientation } = useOrientationSelect();
  const { photos, isLoading } = useRandomPhotos({
    query,
    featured: isToggled,
    orientation,
  });
  useResizeMasonry();
  return (
    <>
      <Hero>
        <Title
          title={'Random Picture Finder'}
          subtitle={'BresoTec Assignment'}
        />
        <SearchInput
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <Level>
          <ToggleInput
            left={true}
            isToggled={isToggled}
            handleToggleChange={handleToggleChange}
          />
          <SelectInput right={true} handleSelectChange={handleSelectChange} />
        </Level>
      </Hero>
      <Section>{isLoading ? <Loading /> : <Column items={photos} />}</Section>
    </>
  );
}

export default App;
