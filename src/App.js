// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WalletInfo from './Components/WalletInfo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WalletInfo />
      </div>
    </Provider>
  );
}

export default App;
