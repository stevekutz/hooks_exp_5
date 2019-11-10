import React , {useEffect}from 'react';
import './index.css';
import {StateInspector, useState} from 'reinspect';
// import {Button, Card, Container, Form, Grid, Input, Label} from 'semantic-ui-react';

const divStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
                  margin: '2px auto', flexDirection: 'column', width: '95%', border: '1px solid blue' }
const taskStyle = {borderRadius: '1px 2px 2px 4px', margin: '2px', border: '1px solid grey'}

function App (){
  const [task, setTask] = useState('', "Task");
  const [todos, setTodos] = useState([], "Todos");
  const [priority, setPriority] = useState('low', "Priority");
;

  const handleChange = e =>{
    const {value, name} =  e.target;

    setTask(value)
    console.log('value is ', value);

  }

  const handleSubmit = (e, value2) => {
    e.preventDefault();

    const newTask = {
      value: task,
      priority: priority,
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

  const handlePriority = e => {
    const {value} =  e.target;
    setPriority(value);
  }

  useEffect( () => {
    console.log('useEfect says task is ', task);
    console.log('useEffect says todos is', todos);
    console.log('useEffect says priority is', priority);
  }, [task, todos]); 

  return (
   
    <div style = {divStyle}>
      
      <div>
        <form  onSubmit = {handleSubmit}>
         <div style = {{display: 'flex'}} > 
          <input
            placeholder = 'the placeholder text'
            value = {task}
            onChange = {handleChange}          
          />
         <select onChange = {handlePriority}>
            <option value2 = 'low'> Low </option>
            <option value2 = 'med'> Medium </option>
            <option value2 = 'high'> High </option>
         </select>
          <button type = 'submit' > Add Todo </button>
         </div>
          
          
        
        </form>
      </div>
      <button onClick = {clearTodos}> Clear All Todos</button>
    

    <div style = {{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap', border: '1px solid blue'}} > 
      {todos.map((item, index) => (
        <div key = {index} id = {index}  style = {taskStyle}>
    
                <div > Task : {item.value}    </div>
                <div id = {index} onClick = {(id) => toggleComplete(id)}  > Done: {item.complete.toString()}    </div>
                <select onChange = {handlePriority} >
                  <option value2 = {priority}> {item.priority} </option>
                  <option value2 = 'low'> Low </option>
                  <option value2 = 'med'> Medium </option>
                  <option value2 = 'high'> High </option>
                </select>
                <button onClick = {handleDelete} > delete todo</button>
                <button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</button>

        </div>
      ))}
    
    </div>  
        

    </div>
   
  );
}




export default App;
