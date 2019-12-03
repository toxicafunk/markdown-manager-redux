import React from 'react';
import './App.css';
import Editor from './containers/editorContainer';
import Viewer from './containers/viewerContainer';

var md = require('markdown-it')();

class App extends React.Component {

  handleBlur = (text) => {
    var mdText = md.render(text)
    this.setState({typed: mdText});
  }

  render() {
    return (
      <div className="App">
        <Editor />
        <Viewer />
    </div>
    );
  }
}

export default App;
