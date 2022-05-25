import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import { Footer as FooterArea } from "./../styles/Footer";

const Footer = ({ section }) => {
  return (
    <FooterArea>
      {section && (
        <EditableArea className="main-magnolia-editor" content={section} />
      )}
    </FooterArea>
  );
};

export default Footer;
