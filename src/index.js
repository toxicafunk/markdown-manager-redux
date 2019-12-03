import React from 'react'
import App from '../src/App'
import './index.css';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducers/index'

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)
