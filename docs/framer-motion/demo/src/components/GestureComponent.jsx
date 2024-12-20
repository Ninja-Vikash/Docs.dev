import React from "react";
import { motion } from "motion/react";

const GestureComponent = () => {
  const style = {
    div: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "rgb(0, 100, 255)",
      border: "none",
      color: "white",
      borderRadius: 5,
      fontSize: 16,
    },
    input: {
      padding: "10px 20px",
      border: "2px solid rgb(0, 100, 255)",
      outline: "none",
      borderRadius: 5,
    },
  };
  return (
    <div style={style.div}>
      <motion.button
        style={style.button}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, backgroundColor: "rgb(0, 0, 255)" }}
        whileTap={{ scale: 0.95 }}
      >
        Motion Button
      </motion.button>
      <motion.input
        style={style.input}
        whileFocus={{ borderColor: "rgb(0, 255, 0)" }}
        type="text"
      />
    </div>
  );
};

export default GestureComponent;
