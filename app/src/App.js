import React , {useEffect}from 'react';
import './index.css';
import {useState} from 'reinspect';
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

  
  const toggleComplete = (e, value2) => {
    let {id} = e.target
    console.log('id  is ', e.target.id);
    console.log('value2 is', value2);

    todos[id].complete = !todos[id].complete;
    setTodos([...todos]);
  }
  
  const handlePriority = async (e) => {
    
    const {value} =  e.target;
    return await setPriority(value);
  }
  
  const updatePriority = async(e) =>{
    let {id,value} = e.target
    console.log('UP name is ', e.target);

    await setPriority(value);

    console.log('UP value is ', value);

    console.log('UP index is ', id);
    // await setPriority(value);
    if(priority !== ''){
      todos[id].priority = priority;
      await setTodos([...todos]);
    }
    id = undefined;
    console.log('UP index is ', id);
  
  }

  useEffect( () => {
    // console.log('useEfect says task is ', task);
    // console.log('useEffect says todos is', todos);
    console.log('useEffect says priority is', priority);
    // setTodos([...todos]);
  }, [task]); 

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
            <option > Low </option>
            <option > Medium </option>
            <option > High </option>
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
                <div>Priority: {item.priority}</div>
                <select id = {index} onChange = {handlePriority} >
                  <option  id = {index} value = 'low'> Low </option>
                  <option  id = {index} > Medium </option>
                  <option  id = {index} > High </option>
                </select>
                <button id = {index} onClick = {(id) => updatePriority(id)} > Update Priority</button>
                <button onClick = {handleDelete} > delete todo</button>
                <button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</button>
        </div>
      ))}
    
    </div>  
        

    </div>
   
  );
}




export default App;
//  <option value2 = {priority}> {item.priority} </option
// <option id = {index} onChange = {(id) => updatePriority(id)}   value2 = 'low'> Low </option>