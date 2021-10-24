import errorImages from '../../images/mastersearch.png';
import s from './Skeleton.module.css';

export default function Skeleton() {
  return (
    <div role="alert">
      <img
        src={errorImages}
        alt="error_images"
        className={s.errorImages}
        width="300"
        height="500"
      />
      <span className={s.spanError}>Sorry,We were try to find...But</span>
    </div>
  );
}
