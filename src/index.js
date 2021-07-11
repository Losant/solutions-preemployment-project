import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WithProviders from './WithProviders';
import MockHandlersDisplay from './components/MockHandlersDisplay';


if (process.env.REACT_APP_MOCK_API) {
  const { worker } = require('./mocks/browser.js');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <WithProviders>
      <MockHandlersDisplay />
      <App />
    </WithProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

// Analytics logging. Defaults to console, can be set to analytics endpoint.
// eslint-disable-next-line no-console
reportWebVitals(console.log);
