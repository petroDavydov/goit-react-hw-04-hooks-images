import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../../images/mastersearch.png';

function ImageGalleryItem({
  onModal,
  webformatURL = defaultImage,
  tags = 'photo',
  image,
}) {
  return (
    <>
      <li className={s.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          onClick={() => {
            onModal(image);
          }}
          className={s.ImageGalleryItemImage}
        />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  onModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  image: PropTypes.string,
};

export default ImageGalleryItem;
