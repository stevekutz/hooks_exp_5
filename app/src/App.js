import React, {useState, useEffect} from 'react';
import {Button, Card, Form, Input, Label,}
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, addTodo] = useState([]);

  const handleChange = e =>{
    const {value, name} =  e.target;

    setTask(value);  

  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      value: task,
      complete: false,
    }

    if(task){
      setTask([...todos, newTask]);
    }

  }  


  return (
    <div className="App">
      <Form>
      
      
      </Form>


    </div>
  );
}

export default App;
