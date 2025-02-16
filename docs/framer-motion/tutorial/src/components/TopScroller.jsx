import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

const TopScroller = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{
        height: "10px",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        transformOrigin: "left",
        backgroundColor: "salmon",
        scaleX,
      }}
    ></motion.div>
  );
};

export default TopScroller;
