import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';

//import TodoItem from './components/TodoItem';

import TodoItems from './components/TodoItems';

function App() {
// this is object of array
  const todoItems =[
    {
    name :"Buy Milk",
    dueDate :"4/10/2023",
  },

  {
    name :"Go to college",
    dueDate :"4/10/2023",
  },
  {
    name :"Like this video",
    dueDate :"right now",
  },
];
  return <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems  todoItems ={todoItems}></TodoItems>
    
    
    
  
  </center>
}

export default App;
