
import Header from "./component/Header";
import  Tasks  from "./component/Tasks";
import {useState} from "react";
import  AddTask  from "./component/AddTask";


function App() {
  
  const [showaddtask,setshowaddtask] = useState(false);
  const [tasks,settasks] = useState( [
  {
    id : 1,
    text : 'Task',
    day : 'Feb 2000',
    reminder : false
  },
  {
    id : 2,
    text : 'Task 2',
    day : 'Feb 2020',
    reminder : false
  }
]);
 
  const addtask = (task) => {
    
    settasks([...tasks,task]);

  }
  const deleteTask = (id) => {
  settasks( 
    tasks.filter( 
      (task) => task.id !== id) 
          );
  }

  const togglereminder = (id) => {
    settasks( tasks.map(
      (task) => task.id === id ? { ...task,reminder: !task.reminder} : task
    )  )
  }
  return (
    <div className="container">
    <Header onAdd={ () => setshowaddtask(!showaddtask) } 
    showadd = {!showaddtask}
    />
    {showaddtask && <AddTask onAdd = {addtask}/>}
    {
      tasks.length > 0 ? (<Tasks  tasks = {tasks} onDelete = {deleteTask} onToggle = {togglereminder} />) : ("No Tasks To Show")
    }
    
    </div>
  );
}

export default App;
