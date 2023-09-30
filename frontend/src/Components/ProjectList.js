import React from "react";
import Project from "./Project";

export default function ProjectList(props) {
  return (
    <div className="cards">
      {props.projectList.map((item, idx) => {
        // console.log(item);
        return <Project project={item} key={idx} />;
      })}
    </div>
  );
}
