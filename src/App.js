import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Post';
import Postform from './components/Postform';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
