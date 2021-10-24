import "./ButtonScrollUp.css";
import { FcSportsMode } from "react-icons/fc";

const ButtonScrollUp = () => {
  const clickUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <FcSportsMode className="buttonUp" onClick={clickUp} />
    </>
  );
};

export default ButtonScrollUp;
