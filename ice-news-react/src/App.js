import React from "react";
import logo from "./logo.svg";
import { EditablePage } from "@magnolia/react-editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NewsList from "./views/NewsList";
import "./App.css";
import Header from "./components/Header";
import LogoImage from "./components/LogoImage";
import AdvertImage from "./components/AdvertImage";

const config = {
  componentMappings: {
    "ice-news:pages/Home": Home,
    "ice-news:pages/NewsList": NewsList,
    "ice-news:components/header": Header,
    "ice-news:components/logoImage": LogoImage,
    "ice-news:components/advertImage": AdvertImage,
  },
};

class App extends React.Component {
  state = {};

  async componentDidMount() {
    const isPagesApp = window.location.search.includes("mgnlPreview");
    console.log(isPagesApp)
    let currentPath = window.location.pathname;
    let templateAnnotations;
    const languages = ["en", "de"];
    const rootNode = "Ice-news";
    
    
    // CHECK AND SET THE LANGUAGE THE PAGE WILL USE
    // let currentLanguage = languages[0];
    // eslint-disable-next-line array-callback-return
    // languages.some((language) => {
      //   if (new RegExp("/" + language + "($|/)").test(currentPath)) {
        //     currentLanguage = language;
        //     return true;
        //   }
        // });
        
        // let nodePath =
        //   nodeName +
        //   window.location.pathname.replace(
          //     new RegExp("(.*" + nodeName + "|.html)", "g"),
          //     ""
          //   );
    console.log(currentPath.includes(rootNode) ? "" : rootNode)
    const pageRes = await fetch(
      `http://localhost:8080/magnoliaAuthor/.rest/pages/${currentPath.includes(rootNode) ? "" : rootNode }${currentPath}`
    );
    const page = await pageRes.json();

    if (isPagesApp) {
      const templateAnnotationsRes = await fetch( `http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1${currentPath}`);
      templateAnnotations = await templateAnnotationsRes.json();

      console.log(templateAnnotations);
    }

    this.setState({ page, templateAnnotations });
  }

  render() {
    const { page, templateAnnotations } = this.state;

    return (
      <div className="App Container">
        <Header/>
        {/* <BrowserRouter>
           <Routes>
              <Route
               path="/"
               element={ <Home/>}
               >

              </Route>
              <Route
               path="/NewsList"
               element={ <NewsList/>}
               >

              </Route>

           </Routes>
        </BrowserRouter> */}
        {page && config && (
          <EditablePage
            content={page}
            config={config}
            templateAnnotations={templateAnnotations}
          />
        )}
      </div>
    );
  }
}

export default App;
