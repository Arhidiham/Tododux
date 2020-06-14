import React from 'react';
import './App.css';
import TodoLine from './components/TodoLine';

function App() {
  return (
    <div>
      <div>
        <input type="checkbox" checked />
        <span>Have chicken?</span>
      </div>
      <div>
        <input type="checkbox" />
        <span>Get cheese.</span>
      </div>
      <div>
        <input type="checkbox" checked />
        <span>Do hackathon.</span>
      </div>
      <div>
        <input type="checkbox" checked />
        <span>Add 4 checkboxes.</span>
      </div>
    </div>
  );
}

export default App;
