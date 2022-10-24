import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greetings';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </div>
);

export default App;
