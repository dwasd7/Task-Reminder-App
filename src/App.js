import Button_Layout from './components/Button_Layout'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { motion } from "framer-motion"
import { useState } from 'react'


function App() {
  const appTitle = 'Task Reminder';
  const intrustions = "Double Click a Task to Set Reminder";
  const  [showAddTask, setShowAddTask] = useState(false)

  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Example Appointment',
        day: 'October 29th at 2:30pm',
        reminder: true,
    },
    {
      id: 2,
      text: 'Graduation Day',
      day: 'May 18th at 1:00pm',
      reminder: true,
    },
    ])

    const addTask =(task) =>{
      const id = Math.floor(Math.random()*99999)+1;
      const newTask ={id, ...task}
      setTasks([...tasks, newTask])
    }
    
    const deleteTask =(id) =>{
      setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleReminder =(id) => {
      setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder}: task))
    }

  return (
    <motion.div whileHover={{
      scale: 1,
      transition: { duration: 1 },
      backgroundColor: "rgb(236, 228, 228)",
      }}
    className="container">
      <Button_Layout onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <div className='title'> <h1> {appTitle}</h1> </div>
      <div className='intrs'><p>{intrustions} </p></div>
      {showAddTask? <AddTask onAdd={addTask}/>:''}      
      {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <div className='NoTasks'>NO TASKS FOUND </div>}

    </motion.div>
  );
}

export default App;
