import logo from './logo.svg';
import React, {useReducer, useContext} from 'react';
import AddTasks from './Components/Tasks/addTasks';
import CardTask from './Components/Tasks/cardTask';
import CardMessage from './Components/Tasks/cardMessage'; 
import TodoListContext from './Context/todoListContext';
import './App.css';


function App() {

  return (
    <>
      <h1>Lista de Tareas {""}</h1>
      <div class='container'>
        <ul>
          <CardTask></CardTask>
        </ul>
      </div>
      <div class='container'>
        <AddTasks></AddTasks>
      </div>      
    </>
    
    
  );
}

export default App;
