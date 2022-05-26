import React from "react";
import { EditableArea } from "@magnolia/react-editor";
import { Footer as FooterArea } from "./../styles/Footer";

const Footer = (props) => {
  return (
    <FooterArea>
      {props.section && (
        <EditableArea className="main-magnolia-editor" content={props.section} />
      )}
    </FooterArea>
  );
};

export default Footer;
