import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import IconButton from '../IconButton/IconButton';
import { ImCross } from 'react-icons/im';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModal();
    }
  };

  handBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handBackDropClick}>
        <div className={s.Modal}>
          {this.props.children}
          <IconButton onClick={this.props.onModal} aria-label="close modal">
            <ImCross width="40" height="40" className={s.ImCross} />
          </IconButton>
        </div>
      </div>,
      document.getElementById('modalRoot'),
    );
  }
}

Modal.propTypes = {
  onModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
