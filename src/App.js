import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/header/heroSection/HeroSection";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Steps from "./components/steps/Steps";

function App() {
  return (
    <>
      <div className="App max-w-screen-2xl mx-auto ">
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Steps />
      </div>
    </>
  );
}

export default App;
