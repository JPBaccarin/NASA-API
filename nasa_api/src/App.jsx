import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Picday from './picday';
import Navbar from './components/Navbar';
import PokemonSearch from './pokemon';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<PokemonSearch/>} />

          <Route path="/picday" element={<Picday />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
