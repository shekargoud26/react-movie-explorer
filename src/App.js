import React from 'react';

import Home from './components/Home';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
