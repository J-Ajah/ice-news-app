import React from "react";
import { EditableArea } from "@magnolia/react-editor";

const HomePage = (props) => {
  const { main,header,footer } = props;
  console.log(main)
  return (
    <div>
      <div className="headerContainer">{header && <EditableArea className="header-magnolia-editor" content={header}/>}</div>
      <div className="main-container">{main && <EditableArea className="main-magnolia-editor"  content={main}/>}</div>
      <div className="footer-container">{footer && <EditableArea className="main-magnolia-editor"  content={footer} headerProps={header}/>}</div>
    </div>
  );
};

export default HomePage;
