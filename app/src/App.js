import React, {useState, useEffect} from 'react';
import {Button, Card, Form, Input, Label} from 'semantic-ui-react';
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
        <Label> New Todo Item</Label>
        <Input
          label = 'new thing to do'
          placeholder = 'the placeholer text'
          style = {}
          value = {}
          onChange = {handleChange}
        
        />
        <Button type = 'submit'> add Todo </Button>
      </Form>
    </div>
  );
}

export default App;
