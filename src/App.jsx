import React from "react";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About";
import Footer from "./components/Footer";
// import backgroundVideo from "./assets/raws/IMG_5398 2.mov";
import backgroundImage from "./assets/raws/IMG_5396.jpg";

function App() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrolled = window.pageYOffset;
      const val = scrolled * 0.5;
      imageRef.current.style.transform = `translateY(-${val}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="fixed top-0 left-0 w-full h-full opacity-70 contain"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "120%", // Vergrößerter initialer Zoom
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          transform: "translateY(0)", // Initiale Position
          willChange: "transform",
        }}
      />
      <ErrorBoundary className="relative z-10">
        <Header />
        <About />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
