import React, { Component } from 'react';

class Viewer extends Component {
  render() {
    const { input } = this.props;

    console.log("viewer:" + input);

      return <div>You typed:
        <span dangerouslySetInnerHTML={{__html:input}} />
      </div>
  }
}

export default Viewer;
