import React from "react";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./components/About";
import Footer from "./components/Footer";
import backgroundImage from "./assets/images/bck.jpeg";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen">
      <div
        ref={imageRef}
        className="fixed top-0 left-0 w-full h-full opacity-70 bg-cover bg-top bg-no-repeat bg-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#a79891",
          zIndex: -1,
          transform: "translateY(0)",
          willChange: "transform",
          height: "200%",
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
