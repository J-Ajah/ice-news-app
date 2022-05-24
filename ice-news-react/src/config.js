import Home from "./views/Home";
import NewsList from "./views/NewsList";
import "./App.css";
import Header from "./components/Homepage/Header";
import LogoImage from "./components/Homepage/LogoImage";
import AdvertImage from "./components/Homepage/AdvertImage";
import NavigationContainer from "./components/NavigationContainer";
import NewsContainerDiv from "./components/Homepage/NewsContainer";
import Category from "./components/Homepage/CategoryChecker";

export const config = {
  componentMappings: {
    "ice-news:pages/Home": Home,
    "ice-news:pages/NewsList": NewsList,
    "ice-news:components/header": Header,
    "ice-news:components/logoImage": LogoImage,
    "ice-news:components/advertImage": AdvertImage,
    "ice-news:components/mainNavContainer": NavigationContainer,
    "ice-news:components/newsSectionContainer": NewsContainerDiv,
  },
};
