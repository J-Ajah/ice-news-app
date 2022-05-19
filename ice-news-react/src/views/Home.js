import React from "react";
import { EditableArea } from "@magnolia/react-editor";

const HomePage = (props) => {
  const { main } = props;
  console.log(main)
  return (
    <div>
      <h2> Home Page has been Rendered</h2>
      <div>{main && <EditableArea content={main}/>}</div>
    </div>
  );
};

export default HomePage;
