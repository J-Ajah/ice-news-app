import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationContainer = (props) => {
  const navigate = useNavigate();
  console.log("Navigation container props has been logged: ", props);
  const { navigation1, navigation2, navigation3, navigation4, navigation5 } =
    props;

  const [isRouteChanged, setIsRouteChanged] = useState(false);

  return (
    <div className="mainNavContainer">
      <ul>
        <li>
          <Link
            to={"/"}
            onClick={() => window.location.replace("/")}
          >
            {navigation1}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={() => window.location.replace("/NewsListPage")}
          >
            {navigation2}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={() => window.location.replace("/NewsListPage")}
          >
            {navigation3}
          </Link>
        </li>
        <li>
          <Link
            to={"/NewsListPage"}
            onClick={() => window.location.replace("/NewsListPage")}
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
    </div>
  );
};

export default NavigationContainer;
