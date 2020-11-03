import "./App.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import {
  selectDevelopersWithFavorite,
  selectDevelopersFavoritesResources,
} from "./store/developers/selectors";

const getStatistics = (state) => {
  return {
    totalDevelopers: state.developers.length,
    totalResources: state.resources.length,
  };
};

const getResources = (state) => {
  return state.resources;
};

const getDevelopers = (state) => {
  return state.developers;
};

function App() {
  const resources = useSelector(getResources);
  const statistics = useSelector(getStatistics);
  const developers = useSelector(getDevelopers);
  const [favoriteId, setFavoriteId] = useState(2);
  const [developersId, setDevelopersId] = useState(1);
  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );
  const developersFavoritesResources = useSelector(
    selectDevelopersFavoritesResources(developersId)
  );

  return (
    <div className="App">
      <h1>Web resources</h1>
      <div>Developers: {statistics.totalDevelopers}</div>
      <div>Resources: {statistics.totalResources}</div>
      <div>
        Who likes?
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
      <div>
        What are{" "}
        <select
          value={developersId}
          onChange={(e) => setDevelopersId(parseInt(e.target.value))}
        >
          {developers.map((dev) => {
            return (
              <option key={dev.id} value={dev.id}>
                {dev.name}
              </option>
            );
          })}
        </select>
        favorites?
        <ul>
          {developersFavoritesResources.map((resource) => {
            return <li key={resource.id}>{resource.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
