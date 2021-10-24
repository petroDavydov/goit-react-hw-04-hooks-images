import React, { Component } from 'react';
import s from './Loader.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class LoaderTriangle extends Component {
  render() {
    return (
      <div className={s.containerTriangle}>
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height="100"
          width="100"
          timeout={3000}
        />
      </div>
    );
  }
}

export default LoaderTriangle;
