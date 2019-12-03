import React, { Component } from 'react';

class Editor extends Component {

  render() {
    const { input, update, reset } = this.props;

    console.log("Editor:" + input)

    function onChange(event) {
      var text = event.target.value;
      update(text);
    }
   
    return <div>
      <textarea onChange={onChange.bind(this)}/>
      <button onClick = {reset}>RESET</button>
      </div>
  }
}

export default Editor;
