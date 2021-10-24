import { useState } from "react";

const useToggleBtn = (initialValue) => {
  const [isToggleBtn, setIsToggleBtn] = useState(initialValue);
  const toggle = () => {
    setIsToggleBtn((prev) => !prev);
  };
  return [isToggleBtn, toggle];
};

export default useToggleBtn;
