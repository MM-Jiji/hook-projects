import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreImage from "./components/load-button";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import { menus } from "./components/tree-view/data";
// import "./index.css";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating numOfStars={10} />
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreImage /> */}
      <TreeView menus={menus} />
    </>
  );
}

export default App;
