// import React, {useState, useEffect} from 'react';
import React, {useEffect} from 'react';
import {useState} from 'reinspect';

import {Button, Card, Form, Input, Label} from 'semantic-ui-react';
import './App.css';

const divStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center',
                  margin: '0 auto', flexDirection: 'column', width: '90%' }

export default function TodosHooks (){
c

  const initialState = [];
  const todoState = useState(initialState)
  const [todos, setTodos] = useStateDevtools(todoState, initialState, 'TODOS');

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

  const handleDelete = (id) => {
    console.log('id  is ', id);
    todos.splice(id, 1);
    setTodos([...todos]);
  }

  const toggleComplete = (e) => {
    let {id} = e.target
        console.log('id  is ', e.target.id);

    todos[id].complete = !todos[id].complete;
    setTodos([...todos]);
  }

  // useEffect( () => {
  //   console.log('useEfect says task is ', task);
  //   console.log('useEffect says todos is', todos);
  // }, [task, todos]); 

  return (
   
      <div style = {divStyle}>
      
      
      <Form onSubmit = {handleSubmit}>
      <Input
      // label = 'new thing to do'
      placeholder = 'the placeholer text'
      value = {task}
      onChange = {handleChange}
      
      />
      <Button type = 'submit' > Add Todo </Button>
      
      </Form>
      <Button onClick = {clearTodos}> Clear All Todos</Button>
      <div>
      {todos.map((item, index) => (
        
        <Card key = {index} id = {index}>
        <Label> {item.value} </Label>
        <Label onClick = {toggleComplete}> Complete: {item.complete.toString()} </Label>
        <Button onClick = {handleDelete} > delete todo</Button>
        <Button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</Button>
        </Card>    
        
        ))}
        </div>    
        
      </div>
   
);
}

