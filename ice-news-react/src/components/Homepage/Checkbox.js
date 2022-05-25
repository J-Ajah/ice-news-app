import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


export default function NewsCategoryCheckbox() {
  const checkboxStyle = {
    color: "gray",
    "&.Mui-checked": {
      color: "#d30b0b !important",
    },
  };
  return (
    <div className="Checkbox-container">
      <FormGroup sx={{
           display: 'flex',
           flexDirection: 'row'
      }}>
        <FormControlLabel control={<Checkbox defaultChecked sx={checkboxStyle} />} label="Business" />
        <FormControlLabel  control={<Checkbox sx={checkboxStyle} />} label="Fashion" />
        <FormControlLabel  control={<Checkbox  sx={checkboxStyle} />} label="General" />
      </FormGroup>
      <FormGroup sx={{
           display: 'flex',
           flexDirection: 'row'
      }}>
        <FormControlLabel control={<Checkbox defaultChecked sx={checkboxStyle} />} label="Technology"/>
        <FormControlLabel  control={<Checkbox sx={checkboxStyle} />} label="Sports" />
        <FormControlLabel  control={<Checkbox  sx={checkboxStyle}/>} label="Health" />
      </FormGroup>
    </div>
  );
}
