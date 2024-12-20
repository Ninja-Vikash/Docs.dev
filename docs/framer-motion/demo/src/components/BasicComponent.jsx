import React from "react";
import { motion } from "motion/react";

const BasicComponent = () => (
  <motion.div
    style={{ height: 100, width: 100, background: "red" }}
    animate={{ x: 200 }}
    transition={{ duration: 2 }}
  />
);

export default BasicComponent;
