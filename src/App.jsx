import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CharactersSection from "./components/CharactersSection";
import ParallaxSpacer from "./components/ParallaxSpacer";

function App() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white [background:linear-gradient(180deg,rgba(1,8,10,1)_32%,rgba(5,17,20,1)_100%)] w-full max-w-[1280px] min-h-screen relative">
        <Navigation />
        {}
        <div className="pt-[50px]">
          <HeroSection />
          <ParallaxSpacer/>
          <AboutSection />
          <CharactersSection />
        </div>
      </div>
    </div>
  );
}




export default App;
