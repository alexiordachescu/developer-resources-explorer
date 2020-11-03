import "./App.css";
import { useSelector } from "react-redux";
import React from "react";

const getStatistics = (state) => {
  return {
    totalDevelopers: state.developers.length,
    totalResources: state.resources.length,
  };
};

function App() {
  const statistics = useSelector(getStatistics);
  return (
    <div className="App">
      <h1>Web resources</h1>
      <div>Developers: {statistics.totalDevelopers}</div>
      <div>Resources: {statistics.totalResources}</div>
    </div>
  );
}

export default App;
