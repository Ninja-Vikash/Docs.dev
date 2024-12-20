import React from "react";
import "./App.css";
import BasicComponent from "./components/BasicComponent";
import GestureComponent from "./components/GestureComponent";

const App = () => {
  return (
    <div className="main">
      {/* <BasicComponent /> */}
      <GestureComponent />
    </div>
  );
};

export default App;
