import "./App.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";

const getStatistics = (state) => {
  return {
    totalDevelopers: state.developers.length,
    totalResources: state.resources.length,
  };
};

const getResources = (state) => {
  return state.resources;
};

function App() {
  const resources = useSelector(getResources);
  const statistics = useSelector(getStatistics);
  const [favoriteId, setFavoriteId] = useState(2);

  const developersWithThisFavorite = useSelector((state) => {
    return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  });

  return (
    <div className="App">
      <h1>Web resources</h1>
      <div>Developers: {statistics.totalDevelopers}</div>
      <div>Resources: {statistics.totalResources}</div>

      <select
        value={favoriteId}
        onChange={(e) => setFavoriteId(parseInt(e.target.value))}
      >
        {resources.map((resource) => {
          return (
            <option key={resource.id} value={resource.id}>
              {resource.name}
            </option>
          );
        })}
      </select>
      <ul>
        {developersWithThisFavorite.map((dev) => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
