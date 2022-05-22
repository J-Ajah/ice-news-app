import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import { InputBase } from "@mui/material";
// import makeStyles from "@mui/material"


// const useStyles = makeStyles(() => ({
//     noBorder: {
//       border: "none",
//     },
//   }));

const NavigationContainer = (props) => {
  const navigate = useNavigate();
  console.log("Navigation container props has been logged: ", props);
  const { navigation1, navigation2, navigation3, navigation4, navigation5 } =
    props;

//   const styles = useStyles();

  return (
    <div className="mainNavContainer">
      <ul>
        <li>
          <Link to={"/"} onClick={() => {
               Navigate("/NewsListPage");
              }}>
            {navigation1}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={
                ()=>{
                   Navigate("/NewsListPage")
                }
            }
          >
            {navigation2}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={() =>  Navigate("/NewsListPage")}
          >
            {navigation3}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={() =>  Navigate("/NewsListPage")}
          >
            {navigation4}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={() => window.location.replace("/NewsListPage")}
          >
            {navigation5}
          </Link>
        </li>
      </ul>
      <div className="searchContainer">
        <InputBase placeholder="Search" endAdornment={
            <InputAdornment position="end">
              $
            </InputAdornment>
          }/>
      </div>
    </div>
  );
};

export default NavigationContainer;
