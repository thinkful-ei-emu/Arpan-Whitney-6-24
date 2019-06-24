import React from 'react';
import './App.css';
import Card from './Card';
import List from './List';

function App(store) {
  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
      {List}
    </div>
    </main>
  );
}

export default App;
