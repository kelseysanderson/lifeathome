import React from 'react';
import ReactDOM from 'react-dom';
import { SiteProvider } from './Context/SiteContext';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SiteProvider>
    <App />
    </SiteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

