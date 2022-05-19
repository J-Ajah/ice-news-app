import React from 'react';
import logo from './logo.svg';
import { EditablePage } from '@magnolia/react-editor';
import Home from  "./views/Home"
import './App.css';


const config = {
  componentMappings: {
    'ice-news:pages/Home': Home,
  },
};


class App extends React.Component {
  state = {};
 
  async componentDidMount() {
    const isPagesApp = window.location.search.includes('mgnlPreview');
    console.log(isPagesApp)
    let templateAnnotations;
    const languages = ['en','de']; 
    const nodeName = 'Ice-news';
    const pathName = window.location.pathname;
     
    // CHECK AND SET THE LANGUAGE THE PAGE WILL USE
    let currentLanguage = languages[0]
    // eslint-disable-next-line array-callback-return
    languages.some((language)=>{
         if(new RegExp('/'+ language + '($|/)').test(pathName)){
           currentLanguage = language;
           return true;
         }
    })
    
    
    let nodePath = nodeName + window.location.pathname.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '');
    nodePath = nodePath.replace(new RegExp('/'+ currentLanguage + '($|/)'),'/');
    
    console.log('http://localhost:8080/magnoliaAuthor/.rest/pages/'+ nodePath + '?lang='+ currentLanguage);
    // const pageRes = await fetch('http://localhost:8080/magnoliaAuthor/.rest/pages/'+ nodePath + '?lang='+ currentLanguage);
    const pageRes = await fetch('http://localhost:8080/magnoliaAuthor/.rest/pages/Ice-news');
    const page = await pageRes.json();
   console.log(page)
    if (isPagesApp) {
      // const templateAnnotationsRes = await fetch(
      //   'http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1/'+ nodePath
      // );
      const templateAnnotationsRes = await fetch(
        'http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1/Ice-news'
      );
      templateAnnotations = await templateAnnotationsRes.json();
      
      console.log(templateAnnotations)
    }
    
    this.setState({ page, templateAnnotations });
  }
 
  render() {
    const { page, templateAnnotations } = this.state;
 
    return (
      <div className='App Container'>
        {page && config && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
      </div>
    );
  }
}

export default App;
