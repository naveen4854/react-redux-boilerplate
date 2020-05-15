import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import './app.css';
import createAppStore from 'src/store'
import Routes from 'src/routes/routes';

export const store = createAppStore;

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter hashType="slash" basename={process.env.PUBLIC_URL}>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
