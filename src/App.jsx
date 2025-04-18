import "./fonts.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import LandingCarousel from "./Components/LandingCarousel/LandingCarousel";
import AboutCards from "./Components/AboutCards/AboutCards";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div
        className="app-wrapper"
        style={{ fontFamily: "GL Tatishvili Metal" }}
      >
        <Analytics />
        <Header />
        <Landing />
        <LandingCarousel />
        <AboutCards />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
