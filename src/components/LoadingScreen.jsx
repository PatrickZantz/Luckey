import React from "react";
import { motion } from "framer-motion";
import loadingImage from "../assets/images/load.png";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "black" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.img
        src={loadingImage}
        alt="Loading"
        width="100"
        height="100"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="text-4xl font-bold text-white absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      ></motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
