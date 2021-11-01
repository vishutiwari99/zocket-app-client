import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/header/heroSection/HeroSection";
import About from "./components/about/About";

function App() {
  return (
    <>
      <div className="App max-w-screen-2xl mx-auto ">
        <Header />
        <HeroSection />
        <About />
      </div>
      {/* <div className="ml-24">
      </div>
      <div className="App max-w-screen-lg mx-auto ">
      </div> */}
    </>
  );
}

export default App;
