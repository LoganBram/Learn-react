import React, {useState} from 'react';
import './App.css';
import ReactModal from 'react-modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Popup from 'reactjs-popup';
import { DropdownButton } from 'react-bootstrap';

export default function App(){

  //items should be state
  //adding item to the list 
  

  const [items, setItems] = useState([
    {dayabrev:"M", do: "finish homework"},
    {dayabrev:"W", do: "go boxing for three hours"},
    {dayabrev:'TU', do: "run hills for a half hour"},
    {dayabrev:"TH", do: "call mom for mothers day"},
    {dayabrev:"TH", do: "tee time at 8:00 am"},
  ]);


  const days = [
    { label: "Monday", dayabrev: "M" },
    { label: "Tuesday", dayabrev: "TU" },
    { label: "Wednesday", dayabrev: "W" },
    { label: "Thursday", dayabrev: "TH" },
    { label: "Friday", dayabrev: "F" },
    { label: "Saturday", dayabrev: "SA" },
    { label: "Sunday", dayabrev: "SU" },

  ];


  
  return(
    //maps each day to the ToDoList component & displays each day as header
    <div className = "appwrapper">
      <Title/>
      <SearchBar/>
      <HandleAdd setItems={setItems}/>
      <div>
      {days.map(day => 
        <div key={day.dayabrev}>
          <h2 className="daylabel">{day.label}</h2>
          <ToDoList todos = {items} day = {day}/>
        </div>
        )}
      </div>
    </div>
  )
    }

// todos is all items to do, day is a single day which gets iterated through the week by the main function
function ToDoList({todos, day}){
  //takes a day as input and returns all items for that day
  //passes to ToDoItem for css management
  let task = todos.filter(todos => todos.dayabrev === day.dayabrev).map(filteredtask => (
  <li> {filteredtask.do}
  <button className = "completed"> completed</button>
  <button className = "edit"> edit </button>
  </li>));
 
  return(
    <div className = "taskswrapper">
      <ul className = "tasks">
        {task}
      </ul>
    </div>
  )
}

function Title(){
  return(
    <div className = "titlewrapper">
      <h1 className = "title">
        To Do List
      </h1>
    </div>
  )
}

function SearchBar({children}){
  return(
    <div className = "searchwrapper"> 
    <div className='addwrapper'>
    {children}
      </div>
      <form className = "search">
        <input type = "text" placeholder = "search..." />
        <br/>
        <input type = "checkbox" id = "showall" name = "showall"/>
        <label htmlfor="showall">Show All Tasks</label>
      </form>
    </div>
  )
}


function HandleAdd({setItems}){
  const [isOpen, setIsOpen] = useState(true);
  const [newTask, setNewTask] = useState('');
  const [day, setDay] = useState('');

  //activates when submit on addtask occurs
  const handleSubmit = () => {
    const task = {
      dayabrev: day,
      do: newTask,
    };

    //update tasks
    setItems(prevItems => [...prevItems, task]);
    //clear inputs
    setDay('');
    setNewTask('');
    //close popup
    setIsOpen(false);
    
  }

  return(
    <>
  <button class = "addtask" onClick={() => setIsOpen(true)}>
    Add Task
  </button>

  <ReactModal 
    isOpen={isOpen}
    contentLabel='addingtask'
    onRequestClose={() => setIsOpen(false)}>
  <div className = 'modalwrap'>
      <h1>Add Item</h1>
    
      <h2 class = 'modalsubtitle'>Task</h2>

      <input 
        className = "modalinput"
        type = 'text' 
        value = {newTask}
      /* e is event object, "when value of this  input field changes, 
      apply new inputted value to e, then update newtask "*/
        onChange={(e) => setNewTask(e.target.value)}/> 
 
      <h2 class = 'modalsubtitle'>Day</h2>
      <select 
              className='modalinput'
              value={day}
              onChange={(e) => setDay(e.target.value)}>
              <option value="">--Please choose a day--</option>
              <option value="M">Monday</option>
              <option value="TU">Tuesday</option>
              <option value="W">Wednesday</option>
              <option value="TH">Thursday</option>
              <option value="F">Friday</option>
              <option value="SA">Saturday</option>
              <option value="SU">Sunday</option>
            </select>
      
  </div>
  <button onClick={handleSubmit}> 
              Submit
            </button>
  </ReactModal>
  </>

  )
}

            