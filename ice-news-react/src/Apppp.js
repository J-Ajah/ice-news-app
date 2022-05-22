import React, { useState, useEffect } from "react";
import { EditablePage } from "@magnolia/react-editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { config } from "./config";
import { GlobalContainer } from "./styles/Global";

const App = () => {
  const [page, setPage] = useState({});
  const [templateAnnotations, setTemplateAnnotations] = useState({});
  const [getPage, setGetPage] = useState(true);

  useEffect(() => {
    const isPagesApp = window.location.search.includes("mgnlPreview");
    console.log(window.location);
    let currentPath = window.location.pathname;
    // const languages = ["en", "de"];
    const rootNode = "Ice-news";

    if (getPage) {
      //   Fetch page
      fetch(
        `http://localhost:8080/magnoliaAuthor/.rest/pages/${
          currentPath.includes(rootNode) ? "" : rootNode
        }${currentPath}`
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setPage(result);
        });

    console.log(isPagesApp)
      if (isPagesApp) {
        //   Fetch template anotation
        fetch(
          `http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1${currentPath}`
        )
          .then((response) => {
            return response.json();
          })
          .then((result) => {
              console.log(result);
            setTemplateAnnotations(result);
          });
      }
    } else {
      setGetPage(false);
    }
  }, []);

  return (
    <div className="App Container">
      <BrowserRouter>
        <Routes>
          <Route   
            path="/"
            element={
              page &&
              config && (
                <RenderComponent
                  page={page}
                  config={config}
                  anotation={templateAnnotations}
                />
              )
            }
          >
          
          </Route>
          <Route
              exact
              path="/Ice-news"
              element={
                page &&
                config && (
                  <RenderComponent
                    page={page}
                    config={config}
                    anotation={templateAnnotations}
                  />
                )
              }
            ></Route>

            <Route
              path="/NewsListPage"
              element={
                page &&
                config && (
                  <RenderComponent
                    page={page}
                    config={config}
                    anotation={templateAnnotations}
                  />
                )
              }
            ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

const RenderComponent = ({ page, config, annotations }) => {
  return (
    <GlobalContainer>
      <EditablePage
        content={page}
        config={config}
        templateAnnotations={annotations}
      />
    </GlobalContainer>
  );
};
