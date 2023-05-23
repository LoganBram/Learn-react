import React, {useState} from 'react';
import './App.css';
import ReactModal from 'react-modal';


export default function App(){

  //items should be state
  //adding item to the list 
  

  const [items, setItems] = useState([
    {dayabrev:"M", do: "finish homework", completed: false},
    {dayabrev:"W", do: "go boxing for three hours", completed: false},
    {dayabrev:'TU', do: "run hills for a half hour", completed: false},
    {dayabrev:"TH", do: "call mom for mothers day", completed: false},
    {dayabrev:"TH", do: "tee time at 8:00 am", completed: false},
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
  
  return (
    <div className="appwrapper">
        <h1 className = "title">
        To Do App
      </h1>
        <div className = "mainbuttons">
          <HandleAdd setItems={setItems} />
            <SearchBar />
        </div>
        <div className = "taskbox">
            {days.map(day =>
                <div key={day.dayabrev}>
                    <h2 className="daylabel">{day.label}</h2>
                    <ToDoList todos={items} day={day} setItems={setItems}/>
                </div>
            )}
        </div>
    </div>
)}







    function HandleAdd({setItems}){
      const [isOpen, setIsOpen] = useState(true);
      const [newTask, setNewTask] = useState('');
      const [day, setDay] = useState('');
    
      //activates when submit on addtask occurs
      const handleSubmit = () => {
        const task = {
          dayabrev: day,
          do: newTask,
          completed: false,
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
      <button className = "addtask" onClick={() => setIsOpen(true)}>
        Add Task
      </button>
      <ReactModal 
        isOpen={isOpen}
        contentLabel='addingtask'
        onRequestClose={() => setIsOpen(false)}
        className = "ModalPopup"
        >
      
      
      <button className = "closemodal" onClick={() => setIsOpen(false)}> X </button>
          
          <h1>Add Task</h1>
        
          <h2 class = 'modalsubtitle'>Task</h2>
    
          <input 
            className = "ModalInputTask"
            type = 'text' 
            value = {newTask}
          /* e is event object, "when value of this  input field changes, 
          apply new inputted value to e, then update newtask "*/
            onChange={(e) => setNewTask(e.target.value)}/> 
     
          <h2 class = 'modalsubtitle'>Day</h2>
          <select 
                  className='ModalInputDay'
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
      <br/>
      <button onClick={handleSubmit} className='AddTaskSubmitButton'> 
          Submit
      </button> 
     
      
      
      </ReactModal>
      </>
    
      )
    }







// todos is all items to do, day is a single day which gets iterated through the week by the main function
function ToDoList({todos, day, setItems}){
  //takes a day as input and returns all items for that day
  //passes to ToDoItem for css management
  let task = todos.filter(todos => todos.dayabrev === day.dayabrev)

  function HandleTaskToggle (task) {
    task.completed = !task.completed;
    setItems([...todos]);
  }

  
  return(
    //map through all items for a day and return a ToDoItem for each
    
      <ul className = "tasksULwrap">
        {task.map(filteredtask => (
          <li className='todoitem'>

          <input className= 'checkbox'
          onClick={() => HandleTaskToggle(filteredtask)}
          type = 'checkbox' value='' />
          <span className = {filteredtask.completed ? 'complete' : 'notcomplete'}>
          {filteredtask.do}
          </span>
        </li>
        ))}
      </ul>
      
  )
}





function SearchBar({children}){
  return(
    <div className = "searchwrapper"> 
      {children}
      <form className = "search">
        <input type = "text" placeholder = "search..." />
      </form>
    </div>
  )
}




            