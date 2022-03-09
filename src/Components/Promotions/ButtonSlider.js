import leftArrow from "./Images/left-arrow.svg";
import rightArrow from "./Images/right-arrow.svg";

const ButtonSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
};

export default ButtonSlider;
