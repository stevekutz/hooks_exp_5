import React, {useState, useEffect} from 'react';
import {Button, Card, Form, Input, Label} from 'semantic-ui-react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, addTodo] = useState([]);

  const handleChange = e =>{
    const {value, name} =  e.target;

    setTask(value);  
    console.log('value is ', value);

  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      value: task,
      complete: false,
    }

    console.log('newTask is ', newTask);  

    addTodo([...todos, newTask]);


  }  

  useEffect( () => {
    console.log('useEfect says task is ', task);
    console.log('useEffect says todos is', todos);
  }, [todos]); 

  return (
    <div className="App">

    <div> something </div>  
  <Button> some button</Button>
      <Form onSubmit = {handleSubmit}>
        <Label> New Todo Item</Label>
        <Input
          // label = 'new thing to do'
          placeholder = 'the placeholer text'
          // style = {}
          // value = {}
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
