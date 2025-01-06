import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "black", zIndex: -2 }}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative min-h-screen"
          >
            <div
              ref={imageRef}
              className="fixed top-0 left-0 w-full h-full opacity-100 bg-cover bg-top bg-no-repeat bg-image"
              style={{
                backgroundImage: `url(${backgroundImage})`,
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
