// import logo from './logo.svg';
import "./App.css";
import Slider from "./Components/Slider/Slider";
import NavBar from "./Components/NavBar";
import PopularGames from "./Components/PopularGames/PopularGames";
import Promotions from "./Components/Promotions/Promotions";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Slider></Slider>
      <PopularGames />
      <Promotions></Promotions>
    </div>
  );
}

export default App;
