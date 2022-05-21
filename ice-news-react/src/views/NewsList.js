import React, { useEffect } from "react";
import { EditableArea } from "@magnolia/react-editor";

const NewsList = (props) => {
  const { main } = props;
  
  // console.log(main)
  return (
    <div>
      <h2> NewsList Page has been Rendered</h2>
      <div>{main && <EditableArea content={main}/>}</div>
    </div>
  );
};

export default NewsList;
