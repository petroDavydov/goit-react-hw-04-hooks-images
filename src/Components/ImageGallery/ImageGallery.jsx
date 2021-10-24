import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ pixabayImages, onModal }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {pixabayImages.map(image => (
          <ImageGalleryItem
            key={image.id}
            tags={image.tags}
            webformatURL={image.webformatURL}
            image={image}
            onModal={onModal}
          />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  onModal: PropTypes.func.isRequired,
  pixabayImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGallery;
