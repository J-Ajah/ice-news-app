import React from "react";
import { EditableArea } from "@magnolia/react-editor";

const HomePage = (props) => {
  const { main,header } = props;
  console.log(header)
  return (
    <div>
      <h2> Home Page has been Rendered</h2>
      <div>{header && <EditableArea content={header}/>}</div>
      <div>{main && <EditableArea content={main}/>}</div>
    </div>
  );
};

export default HomePage;
