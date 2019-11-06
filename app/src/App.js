// import React, {useState, useEffect} from 'react';
import React, {useEffect} from 'react';
import {StateInspector, useState} from 'reinspect';

import {Button, Card, Form, Input, Label} from 'semantic-ui-react';
import './App.css';

const App = ({id}) => {
  const [task, setTask] = useState('', id);
  const [todos, setTodos] = useState([], id);

  // const initialState = [];
  // const todoState = useState(initialState)
  // const [todos, setTodos] = useStateDevtools(todoState, initialState, 'TODOS');

  const handleChange = e =>{
    const {value, name} =  e.target;

    setTask(value)
    console.log('value is ', value);

  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      value: task,
      complete: false,
    }

    console.log('newTask is ', newTask);  
    if(task) {
      setTodos([...todos, newTask]);
      setTask('');
    }
    
  }  

  const clearTodos = () => {
    setTodos([]);
  }

  useEffect( () => {
    console.log('useEfect says task is ', task);
    console.log('useEffect says todos is', todos);
  }, [task, todos]); 

  return (
    <StateInspector>
 
      <Button onClick = {clearTodos}> Clear All Todos</Button>
        <Form onSubmit = {handleSubmit}>
          <Label> New Todo Item</Label>
          <Input
            // label = 'new thing to do'
            placeholder = 'the placeholer text'
            value = {task}
            onChange = {handleChange}
          
          />
          <Button type = 'submit' > Add Todo </Button>

        </Form>

        <div>
          {todos.map((item, index) => (

            <Card key = {index}>
              <Label> {item.value} </Label>
              <Label> {item.complete.toString()} </Label>
            </Card>    

      ))}
        </div>    
   
    </StateInspector>
  );
}

export default App;
