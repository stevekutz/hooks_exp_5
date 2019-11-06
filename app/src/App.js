import React, {useState, useEffect} from 'react';
import {Button, Card, Form, Input, Label} from 'semantic-ui-react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = e =>{
    const {value, name} =  e.target;

    setTask(value);  
    console.log('value is ', value);
    console.log('name is ', name);

  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      value: task,
      complete: false,
    }

    console.log('newTask is ', newTask);  

    setTodos([...todos, newTask]);
    setTask('');
    


  }  

  const clearTodos = () => {
    setTodos([]);
  }

  useEffect( () => {
    console.log('useEfect says task is ', task);
    console.log('useEffect says todos is', todos);
  }, [task, todos]); 

  return (
    <div className="App">

    <div> something </div>  
    <Button onClick = {clearTodos}> Clear All Todos</Button>
      <Form onSubmit = {handleSubmit}>
        <Label> New Todo Item</Label>
        <Input
          // label = 'new thing to do'
          placeholder = 'the placeholer text'
          // name = {task}
          value = {task}
          onChange = {handleChange}
        
        />
        <Button type = 'submit' > Add Todo </Button>

      </Form>

      <div>
        {todos.map((item, index) => (

          <Card key = {index}>
            <Label> {item.value} </Label>
            <Label> {item.complete} </Label>
          </Card>    

    ))}
      </div>    

    </div>
  );
}

export default App;
