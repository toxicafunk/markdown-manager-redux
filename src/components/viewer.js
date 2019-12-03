import React, { Component } from 'react';

class Viewer extends Component {
  render() {
    const { input } = this.props;

      return <div>You typed:
        <span dangerouslySetInnerHTML={{__html:input}} />
      </div>
  }
}

export default Viewer;
