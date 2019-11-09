import React , {useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodosHooks from './TodosHooks';
import * as serviceWorker from './serviceWorker';
import {StateInspector, useState} from 'reinspect';
import Counter from './Counter';
import {Button, Card, Form, Grid, Input, Label} from 'semantic-ui-react';

const divStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center',
                  margin: '0 auto', flexDirection: 'column', width: '90%' }

const labelStyle = {width: '90%'}

function App() {
  return (
    <StateInspector name="Example">
     <TodosHooks/> 
    </StateInspector>
  );
}

// import addReactNDevTools from 'reactn-devtools';
// addReactNDevTools();

function TodosHooks ({id}){
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

  useEffect( () => {
    console.log('useEfect says task is ', task);
    console.log('useEffect says todos is', todos);
  }, [task, todos]); 

  return (
   
    <div style = {divStyle}>
      
      <div>
        <Form onSubmit = {handleSubmit}>
          <Input
            // label = 'new thing to do'
            placeholder = 'the placeholer text'
            value = {task}
            onChange = {handleChange}
          
          />
          <Button type = 'submit' > Add Todo </Button>
        
        </Form>
      </div>

      <Button onClick = {clearTodos}> Clear All Todos</Button>
    

    <div style = {{display: 'flex', width: '90%', margin: '0 auto', flexWrap: 'wrap'}} > 
      {todos.map((item, index) => (
        <div key = {index} id = {index} style = {{width: '30%', margin: '0 auto'}} >
          <Card>
            <Grid container>
              <Grid.Column>
                <Label style = {labelStyle} horizontal> Task : {item.value}    </Label>
                <Label center id = {index} onClick = {(id) => toggleComplete(id)}  > Complete: {item.complete.toString()}    </Label>
              </Grid.Column>      
            </Grid>
            <Grid container>
              <Grid.Column>
                <button fluid  right onClick = {handleDelete} > delete todo</button>
                <button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</button>
              </Grid.Column>
            
              </Grid>  
          
          
            </Card>
        </div>
      ))}
    
    </div>  
        

    </div>
   
  );
}




export default App;
