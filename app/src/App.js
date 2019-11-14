import React , {useEffect}from 'react';
import './index.css';
import {useState} from 'reinspect';
import Select from 'react-select';
// import {Button, Card, Container, Form, Grid, Input, Label} from 'semantic-ui-react';

const divStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
                  margin: '2px auto', flexDirection: 'column', width: '95%', border: '1px solid blue' }
const taskStyle = {borderRadius: '1px 2px 2px 4px', margin: '2px', border: '1px solid grey'}

function App (){
  const [task, setTask] = useState('', "Task");
  const [todos, setTodos] = useState([], "Todos");
  const [priority, setPriority] = useState('', "Priority");
  const [values, setValues] = useState('', "AddTodo Priority Value");

  const selectOptions = [
    {value: 1, label: "Low"},
    {value: 2, label: "Medium"},
    {value: 3, label: "High"}
  ]

  function handleSelectChange(newValue, actionMeta){
    setValues({
        ...values,
        [actionMeta.name]: newValue ? newValue.value : ""
    })
  }

  const initialFormState = { mySelectKey: null };

  const [myForm, setMyForm] = useState(initialFormState);

  const handleChange = e =>{
    const {value, name} =  e.target;

    setTask(value);
    console.log('value is ', value);

  }

  const handleSubmit = (e, value2) => {
    e.preventDefault();

    console.log('~~~~~  e   is ', e);

    const newTask = {
      value: task,
      priority: priority,
      complete: false,
    }

    console.log('newTask is ', newTask);  
    if(task && priority) {
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

  const updateForm = value => {
    setMyForm({ ...myForm, mySelectKey: value });
  };
  
  const toggleComplete = (e, value2) => {
    let {id} = e.target
    console.log('toggle  e', e);  
    console.log('id  is ', e.target.id);
    console.log('value2 is', value2);

    todos[id].complete = !todos[id].complete;
    setTodos([...todos]);
  }
  
  const handlePriority = async (e) => {
    
    const {value, id} =  e.target;
    console.log('>>>> id is ', id);
    console.log('>>>> value is ', value);
   return await setPriority(value);
 
  }
  
  const updatePriority = async(e, addTodo) =>{
    let {id,value} = e.target
    console.log('UP name is ', e.target);

    // await setPriority(value);

    console.log('UP value is ', value);

    console.log('UP index is ', id);
    // await setPriority(value);
    if(priority !== ''){
      todos[id].priority = priority;
      await setTodos([...todos]);
    }

    setPriority('');
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
         <Select 
            // onChange = {handlePriority}
            onChange={({ value }) => updateForm(value)}
            options = {selectOptions}
            isClearable = {true}
         />
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
                <select id = {index} onChange = {handlePriority}>
                  <option  id = {index} > Low </option>
                  <option  id = {index} > Medium </option>
                  <option  id = {index} > High </option>
                </select>
                <button id = {index} onClick = {(id) => updatePriority(id)} onChange = {handlePriority}> Update Priority</button>
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


/*
const initial_state = { my_field: "" }

const my_field_options = [
    { value: 1, label: "Daily" },
    { value: 2, label: "Weekly" },
    { value: 3, label: "Monthly" },
]

export default function Example(){
    const [values, setValues] = useState(initial_state);

    function handleSelectChange(newValue, actionMeta){
        setValues({
            ...values,
            [actionMeta.name]: newValue ? newValue.value : ""
        })
    }

    return <Select
               name={"my_field"}
               inputId={"my_field"}
               onChange={handleSelectChange}
               options={my_field_options}
               placeholder={values.my_field}
               isClearable={true}
           /> 
}

*/

/*
         <select onChange = {handlePriority}>
            <option active= ""> -choose-</option>
            <option value = "low"> Low </option>
            <option value = "medium"> Medium </option>
            <option value = "high"> High </option>
         </select>
*/