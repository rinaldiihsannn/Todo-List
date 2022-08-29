import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <div className="todo-app">
      <TodoList />
      </div>
      <div>
        <footer className='footer'>
          &copy;Rinaldi Ihsan Setiawan || 2022
        </footer>
      </div>
    </div>

  );
}

export default App;
