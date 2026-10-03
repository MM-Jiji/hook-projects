import Accordion from "./components/accordion";
import NavBar from "./components/food-reciep/components/navbar";
import Details from "./components/food-reciep/pages/details";
import Favorites from "./components/food-reciep/pages/favorites";
import Home from "./components/food-reciep/pages/home";
import ImageSlider from "./components/image-slider";
import LoadMoreImage from "./components/load-button";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";
import Weather from "./components/weather-app/weather";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Accordion />
      <RandomColor />
      <StarRating numOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreImage /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <Weather /> */}
      <div>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
