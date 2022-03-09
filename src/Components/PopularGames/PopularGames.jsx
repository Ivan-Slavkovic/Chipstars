import "../../Style/PopularGames.css";
import dataPopularGames from "./dataPopularGames";
const PopularGames = () => {
  return (
    <div className="pop_games_container">
      <div className="pop_games_container-text">
        <p>Popular game</p>
      </div>
      <div className="pop_games_container-list">
        {dataPopularGames.map((obj, index) => {
          return (
            <div className="pop_games_container-list-games" key={index}>
              <img
                className="pop_games_container-list-games-image"
                src={`Images/image${index}.jpg`}
                alt="pic"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularGames;
