/* ============================================================================
 * Components
 * ========================================================================= */
import App from './components/App';

/* ============================================================================
 * React
 * ========================================================================= */
import React from 'react';
import ReactDOM from 'react-dom';

/* ============================================================================
 * Redux
 * ========================================================================= */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './state/reducers';


const store = createStore(
  reducers,
  /* Pull in redux devtools */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/* ============================================================================
 * Render app
 * ========================================================================= */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

