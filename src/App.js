import React from 'react';
import './App.css';
import Editor from './containers/editorContainer';
import Viewer from './containers/viewerContainer';

class App extends React.Component {

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
