import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Header from "./components/Header";
import Movie from './components/Movie';
import NotFound from './components/NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </Router>
  );
}

export default App;
