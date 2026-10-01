import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
// import "./index.css";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating numOfStars={10} />
    </>
  );
}

export default App;
