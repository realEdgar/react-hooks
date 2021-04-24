import React from 'react'
import './styles/App.css';

//==== import components ==== //
import { Header } from './components/Header.jsx';
import { Characters } from './components/Characters.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
