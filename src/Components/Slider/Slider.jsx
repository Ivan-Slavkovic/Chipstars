import dataSlider from "./dataSlider";
import "../../Style/Slider.css";
import { useCallback, useEffect, useState } from "react";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const changeSlide = useCallback(() => {
    if (index === 2) {
      setIndex(0);
      setSlideIndex(0);
    } else {
      setIndex((index) => index + 1);
      setSlideIndex((slideIndex) => slideIndex + 1);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [changeSlide]);

  return (
    <div className="slider_container">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index
                ? "slider_container-slide"
                : "slider_container-slide active-anim"
            }
          >
            <img src={`./Images/image${index}.jpg`} alt="Pic" />
            <div className="slider_container-slide-button">
              <button>Saznaj vise</button>
            </div>
          </div>
        );
      })}
      <div className="slider_container-dots">
        {dataSlider.map((obj, index) => {
          return (
            <div key={obj.id} className={index ? "dot active" : "dot"}></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
