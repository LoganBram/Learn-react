

export default function app(){
  let items = [
    {id:"M", do: "finish homework"},
    {id:"W", do: "go boxing for three hours"},
    {id:'TU', do: "run hills for a half hour"},
    {id:"TH", do: "call mom for mothers day"},
    {id:"TH", do: "tee time at 8:00 am"},
  ];

  const days = [
    { label: "Monday", id: "M" },
    { label: "Tuesday", id: "TU" },
    { label: "Wednesday", id: "W" },
    { label: "Thursday", id: "TH" },
    { label: "Friday", id: "F" },
    { label: "Saturday", id: "SA" },
    { label: "Sunday", id: "SU" },
    // Add the rest of the week here...
  ];
  
  return(
    //maps each day to the ToDoList component & displays each day as header
    <div>
    {days.map(day => 
      <div key={day.id}>
        <h2 className="daylabel">{day.label}</h2>
        <ToDoList todos = {items} day = {day}/>
      </div>
    )}
  </div>
  )
    }


// todos is all items to do, day is a single day which gets iterated through the week by the main function
function ToDoList({todos, day}){
  //takes a day as input and returns all items for that day
  //passes to ToDoItem for css management
  let task = todos.filter(todos => todos.id === day.id).map(filteredtask => (<li> {filteredtask.do} </li>))
  return(
    <div>
      <ToDoItem todo = {task}/>
    </div>
  )
}

function ToDoItem({todo}){
  return(
    <div>
      <p> {todo} </p>
      <button> click me</button>
    </div>
  )
  
}