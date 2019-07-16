import React from 'react';

const PhotoCard = ({
  picture,
  original_picture,
  profile_image,
  name,
  username,
  description,
  alt_description,
  downloads,
  likes,
}) => (
  <div className='card'>
    <div className='card-image'>
      <figure className='image'>
        <a href={original_picture} target='_blank' rel='noopener noreferrer'>
          <img src={picture} alt={alt_description} />
        </a>
        <figcaption>{description}</figcaption>
      </figure>
    </div>
    <div className='card-content'>
      <div className='media'>
        <div className='media-left'>
          <figure className='image is-48x48'>
            <img src={profile_image} alt='profile' />
          </figure>
        </div>
        <div className='media-content'>
          <p className='title is-4'>{name}</p>
          <p className='subtitle is-6'>@{username}</p>
        </div>
      </div>

      <div className='content'>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <span className='icon has-text-info'>
                <i className='fas fa-download' />
              </span>
              Downloads: {downloads}
            </div>
          </div>
          <div className='level-right'>
            <div className='level-item'>
              <span className='icon'>
                <i className='far fa-thumbs-up' />
              </span>
              Likes: {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PhotoCard;
