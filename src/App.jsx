import React from "react";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About"; // Import the About component
import Footer from "./components/Footer"; // Import the About component
import backgroundVideo from "./assets/raws/IMG_5398 2.mov";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const scrolled = window.pageYOffset;
      const val = scrolled * 0.5;
      videoRef.current.style.transform = `translateY(-${val}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full object-cover opacity-70"
        style={{
          zIndex: -1,
          willChange: "transform",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <ErrorBoundary className="relative z-10">
        <Header />
        <About className="w-full" />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
