import React from "react";
import { EditablePage } from "@magnolia/react-editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { config } from "./config";
import { GlobalContainer } from "./styles/Global";
import NewsDetailPage from "./components/NewsDetails";
import NewsContext from "./context/newsContext";

class App extends React.Component {
  _isMounted = false;

  state = {};

  async componentDidMount() {
    this._isMounted = true;
    const isPagesApp = window.location.search.includes("mgnlPreview");
    console.log(window.location);
    let currentPath = window.location.pathname;
    let templateAnnotations;
    // const languages = ["en", "de"];
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
      console.log(
        `http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1${currentPath}`
      );
    }

    // Fetch news 
    const fetchNews = await fetch("http://localhost:8080/magnoliaAuthor/.rest/newscontainer");
    const  news = await fetchNews.json();
    const newsResult = news.results;

    


    // SETS APPS STATE
    this.setState({ page, templateAnnotations, newsResult });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderComponent() {
    const { page, templateAnnotations } = this.state;
    return (
      <GlobalContainer>
        <EditablePage
          content={page}
          config={config}
          templateAnnotations={templateAnnotations}
        />
      </GlobalContainer>
    );
  }

  render() {
    const {newsResult} = this.state;
    return (
      <div className="App Container">
        <BrowserRouter>
          <NewsContext.Provider value={{newsResult}}>
            <Routes>
              <Route
                path={"/NewsListPage"}
                element={this.state.page && config && this.renderComponent()}
              ></Route>
              <Route
                exact
                path="/"
                element={this.state.page && config && this.renderComponent()}
              ></Route>
              {/* React Query Route Route */}
              <Route path={"/:id"} element={<NewsDetailPage />}></Route>
              {/*  Magnolia Query Route */}
              <Route
                exact
                path={"/Ice-news/:id"}
                element={<NewsDetailPage />}
              ></Route>
              <Route
                path={"/Ice-news"}
                element={this.state.page && config && this.renderComponent()}
              ></Route>
            </Routes>
          </NewsContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
