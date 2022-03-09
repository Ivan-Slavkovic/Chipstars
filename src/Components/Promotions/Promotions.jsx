import "../Style/Promotions.css";
import dataSlider from "../Slider/dataSlider";
const Promotions = () => {
  return (
    <div className="promotions_container">
      <h1>Promotions</h1>
      <div>
        {dataSlider.map((obj, index) => {
          return (
            <div className="promotions_container-cards" key={obj.id}>
              <img src={`./Images/image${index}.jpg`} alt=""></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promotions;
