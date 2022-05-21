import React from "react";
import { EditablePage } from "@magnolia/react-editor";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import { config } from "./config";
import { GlobalContainer } from "./styles/Global";

class App extends React.Component {
  state = {};

  async componentDidMount() {
    const isPagesApp = window.location.search.includes("mgnlPreview");
    console.log(isPagesApp);
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

    const pageRes = await fetch(
      `http://localhost:8080/magnoliaAuthor/.rest/pages/${
        currentPath.includes(rootNode) ? "" : rootNode
      }${currentPath}`
    );
    const page = await pageRes.json();

    if (isPagesApp) {
      const templateAnnotationsRes = await fetch(
        `http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1${currentPath}`
      );
      templateAnnotations = await templateAnnotationsRes.json();

      console.log(templateAnnotations);
    }

    this.setState({ page, templateAnnotations });
  }

  render() {
    const { page, templateAnnotations } = this.state;

    return (
      <div className="App Container">
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  page &&
                  config && (
                    <GlobalContainer>
                      <EditablePage
                        content={page}
                        config={config}
                        templateAnnotations={templateAnnotations}
                      />
                    </GlobalContainer>
                  )
                }
              ></Route>
              <Route
                exact
                path={"/Ice-news"}
                element={
                  page &&
                  config && (
                    <GlobalContainer>
                      <EditablePage
                        content={page}
                        config={config}
                        templateAnnotations={templateAnnotations}
                      />
                    </GlobalContainer>
                  )
                }
              ></Route>
              <Route
                exact
                path={"/Ice-news"}
                element={
                  page &&
                  config && (
                    <GlobalContainer>
                      <EditablePage
                        content={page}
                        config={config}
                        templateAnnotations={templateAnnotations}
                      />
                    </GlobalContainer>
                  )
                }
              ></Route>
              <Route
                exact
                path={"/NewsListPage"}
                element={
                  page &&
                  config && (
                    <GlobalContainer>
                      <EditablePage
                        content={page}
                        config={config}
                        templateAnnotations={templateAnnotations}
                      />
                    </GlobalContainer>
                  )
                }
              ></Route>
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
