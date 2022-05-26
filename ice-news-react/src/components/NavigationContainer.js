import { Link, Navigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { InputBase } from "@mui/material";
import { magnoliaHostUrl } from "../public/config";
import searchIcon from "../assets/Vector.svg";

const NavigationContainer = (props) => {
  const {
    navigation1,
    navigation2,
    navigation3,
    navigation4,
    navigation5,
    fbIcon,
    linkedInIcon,
    messengerIcon,
  } = props;

  return (
    <div className="mainNavContainer">
      <div className="mini-container">
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={() => {
                Navigate("/NewsListPage");
              }}
            >
              {navigation1}
            </Link>
          </li>
          <li>
            <Link
              to={"/NewsListPage"}
              onClick={() => {
                Navigate("/NewsListPage");
              }}
            >
              {navigation2}
            </Link>
          </li>
          <li>
            <Link
              to={"/NewsListPage"}
              onClick={() => Navigate("/NewsListPage")}
            >
              {navigation3}
            </Link>
          </li>
          <li>
            <Link
              to={"/NewsListPage"}
              onClick={() => Navigate("/NewsListPage")}
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
          <InputBase
            placeholder="Search News"
            endAdornment={
              <InputAdornment position="end">
                <img src={searchIcon} alt="searchIcon" />
              </InputAdornment>
            }
          />
        </div>
        <div className="social-Icons">
          <img src={`${magnoliaHostUrl}${fbIcon["@link"]}`} alt="Facebook" />
          <img
            src={`${magnoliaHostUrl}${messengerIcon["@link"]}`}
            alt="Messenger"
          />
          <img
            src={`${magnoliaHostUrl}${linkedInIcon["@link"]}`}
            alt="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
