import "./App.css";
import React from "react";
import BasicComponent from "./components/BasicComponent";
import GestureComponent from "./components/GestureComponent";
import TopScroller from "./components/TopScroller";

const App = () => {
  return (
    <div className="main">
      {/* <BasicComponent /> */}
      {/* <GestureComponent /> */}
      <TopScroller />
      <div className="screen"></div>
      <div className="screen"></div>
      <div className="screen"></div>
    </div>
  );
};

export default App;
