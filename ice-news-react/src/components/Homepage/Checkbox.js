import React, { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import NewsContext from "../../context/newsContext";

export default function NewsCategoryCheckbox() {

  const {selectedCategories, checkCategory} = useContext(NewsContext);

  // const selectedCategories = {
  //   all: true,
  //   business: false,
  //   fashion: false,
  //   general: false,
  //   technology: false,
  //   sports: false,
  //   health: false,
  // };


  // const checkCategory = (e) => {
  //   let currentCategory = e.target.value;
  //   Object.entries(selectedCategories).forEach(([key, value]) => {
  //     if (key === currentCategory) {
  //       selectedCategories[key] = !value;
  //     }
  //   });
  // };

  const checkboxStyle = {
    color: "gray",
    "&.Mui-checked": {
      color: "#d30b0b !important",
    },
  };
  return (
    <div className="Checkbox-container">
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="business"
            />
          }
          label="Business"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="fashion"
            />
          }
          label="Fashion"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="general"
            />
          }
          label="General"
        />
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="technology"
            />
          }
          label="Technology"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="sports"
            />
          }
          label="Sports"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="health"
            />
          }
          label="Health"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={checkboxStyle}
              onChange={checkCategory}
              value="entertainment"
            />
          }
          label="Entertainment"
        />
      </FormGroup>
    </div>
  );
}
