import React from 'react';
import './App.css';
import Editor from './containers/editorContainer';
import Viewer from './containers/viewerContainer';
import CapViewer from './containers/capViewerContainer';
import ImportFromFileBody from './containers/importFromFileBodyContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ImportFromFileBody />
        <Editor />
        <Viewer />
        <CapViewer />
    </div>
    );
  }
}

export default App;
