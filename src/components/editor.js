import React, { Component } from 'react';

class Editor extends Component {

  render() {
    const { input, update, reset, load, save, setName } = this.props;

    function onChange(event) {
      var text = event.target.value;
      update(text);
    }

    const onSetName = (event) => setName(event.target.value);

    const onSave = () => save();

    const onLoad = () => load();
   
    return <div>
      <textarea onChange={onChange.bind(this)} value={input} rows="30" cols="90" />
      <button onClick = {reset}>RESET</button>
      <input name="mdname" onChange={onSetName.bind(this)} type="text" placeholder="Enter a name..." minLength="4" maxLength="8" size="10" />
      <button onClick={onSave.bind(this)}>SAVE</button>
      <button onClick={onLoad.bind(this)}>LOAD</button>
      </div>
  }
}

export default Editor;
