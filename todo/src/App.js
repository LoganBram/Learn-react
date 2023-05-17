

export default function app(){
  let items = [
    {dayabrev:"M", do: "finish homework"},
    {dayabrev:"W", do: "go boxing for three hours"},
    {dayabrev:'TU', do: "run hills for a half hour"},
    {dayabrev:"TH", do: "call mom for mothers day"},
    {dayabrev:"TH", do: "tee time at 8:00 am"},
  ];

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
    <div class = "appwrapper">
      <Title/>
      <SearchBar/>
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
  <button> completed</button>
  <button> edit </button>
  </li>));
 
  return(
    <div class = "taskswrapper">
      <ul class = "tasks">
        {task}
      </ul>
    </div>
  )
}

function Title(){
  return(
    <div class = "titlewrapper">
      <h1 class = "title">
        To Do List
      </h1>
    </div>
  )
}

function SearchBar(){
  return(
    <div class = "searchwrapper"> 
      <form class = "search">
        <input type = "text" placeholder = "search..." />
        <br/>
        <input type = "checkbox" id = "showall" name = "showall"/>
        <label htmlfor="showall">Show All Tasks</label>
      </form>
    </div>
  )
}