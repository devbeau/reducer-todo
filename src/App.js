import React from 'react';

import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoForm />
    </div>
  );
}

export default App;
