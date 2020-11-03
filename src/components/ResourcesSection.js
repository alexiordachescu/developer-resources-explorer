import React from "react";
import { useSelector } from "react-redux";
import { getAllResources } from "../store/resources/selectors";

export default function ResourcesSection() {
  const resources = useSelector(getAllResources);

  return (
    <div>
      {" "}
      {resources.map((resource) => {
        return (
          <div>
            <h3>
              {resource.name} ({resource.type} ) --- Find out more at:{" "}
              <a href={resource.url}>{resource.url}</a>
            </h3>
            <h5>
              {resource.tags.map((item) => {
                return <span>{item}</span>;
              })}
            </h5>
          </div>
        );
      })}
    </div>
  );
}
