import React from "react";
import { EditableArea } from "@magnolia/react-editor";

const Footer = ({ section }) => {
  return (
    <div className="footer">
      {section && (
        <EditableArea className="main-magnolia-editor" content={section} />
      )}
    </div>
  );
};

export default Footer;
