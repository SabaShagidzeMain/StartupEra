import "./fonts.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <div
        className="app-wrapper"
        style={{ fontFamily: "GL Tatishvili Metal" }}
      >
        <Header />
        <Landing />
      </div>
    </>
  );
}

export default App;
