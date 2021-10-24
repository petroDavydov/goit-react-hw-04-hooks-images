import React from 'react';
import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ children, onModal, ...allyProps }) => {
  return (
    <button
      type="button"
      className={s.IconButton}
      onClick={onModal}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onModal: () => null,
  children: null,
};

IconButton.propTypes = {
  onModal: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
