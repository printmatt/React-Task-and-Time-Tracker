import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";
import Clock from "./components/Clock";
import Button from "./components/Button";
function App() {
  const name = 'Matt';
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor',
        time: 'Feb 2nd at 3PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dinner',
        time: 'March 2nd at 3PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Coffee',
        time: 'June 2nd at 3PM',
        reminder: false,
    }
])

  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }
  
  //toggle reminder boolean
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newtask = {id,...task}
    setTasks([...tasks,newtask])
  }
    
  return (
    <div className="container">
      
      <Header></Header>
      <Clock/>
      <Button text = {showAddTask ? "Hide" : "Add A Task"} color = {showAddTask ? "red" : "green"} onAdd = {() => {setShowAddTask(!showAddTask)}}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ? <Tasks tasks = {tasks} name = {name} onDelete = {deleteTask} onToggle = {toggleReminder}></Tasks> : "No more tasks to do."}
    </div>
    
  );
}

export default App;
