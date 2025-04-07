import "./fonts.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import LandingCarousel from "./Components/LandingCarousel/LandingCarousel";
import AboutCards from "./Components/AboutCards/AboutCards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div
        className="app-wrapper"
        style={{ fontFamily: "GL Tatishvili Metal" }}
      >
        <Header />
        <Landing />
        <LandingCarousel />
        <AboutCards />
      </div>
    </>
  );
}

export default App;
