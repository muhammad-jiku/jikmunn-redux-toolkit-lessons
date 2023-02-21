import React from 'react';
import './App.css';
import Counter from './components/CounterView';
import Posts from './components/PostsView';

function App() {
  return (
    <div className="App">
      <h1> Redux toolkit </h1>
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
