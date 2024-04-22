import './App.css';
import { useEffect, useState } from "react";
import Header from './components/Header';
import React from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  // adding a boolean useState, shows 'showAddTask' by default, we want button to toggle add
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const res = await fetch('http://localhost:5000/tasks')
  //     const data = await res.json()

  //     console.log(data) 
  //   }

  //   fetchTasks()
  // }, []) 

  // addTaskHandler()
  const addTaskHandler = ((task) => {
    // since we know the new tasks do get called, we can add it to state.
    // console.log(task);

    // first we create id for the new task.
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task} // adds each id to every new task
    // we want to set the current tasks but also add the newTasks (inputted) as well
    setTasks([...tasks, newTask]); 

    })

    // Delete task handler
    // this is the same as doing deleteTaskHandler(id) !
    const deleteTaskHandler = (id) => { // takes in an id to get deleted
      // we want to print this out so we know the hook works
      // console.log('delete', id) // will call the tasks.id

      // since it works, we are going to access the setTask to delete the task upon click
      // we are trying to filter out the task that will be deleted!
      // so we setTasks to only the tasks.id that don't equate to id that was called in deleteTaskHandler
      setTasks(tasks.filter((task) => (
        // will only show the id's that weren't passed to function
        task.id !== id 

        
      )))
    }

    // toggle reminder, needs to call an id to know which one to toggle
    const toggleHandler = (id) => {
      console.log(id) // prints id everytime task is double clicked

      // now we need to set reminder to True or False by using useState
      setTasks(tasks.map((task) => (
        // if task in map is same task as id shown, it will do opposite reminder, otherwise no change
        task.id === id ? ({ ...task, reminder: !task.reminder }) : (task)
      )))
    
    }



  return (
    // can only return 1 parent element ! [so only 1 div]
    <div className="App">
      <div className = "container">
        {/* we want the opposite of the value of showAddTask at header */}
        <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title={'Task Tracker'}/> {/* added a paramater */}
        {showAddTask && (<AddTask onAdd = {addTaskHandler}/>)} {/* shortcut ternary without else*/}
        {/* using a ternary to show a msg if no tasks r displayed */}
        {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTaskHandler} onToggle = {toggleHandler}/>) 
        : ('No tasks to Display')} {/* need to call deletetaskHandler to tasks because thats where it is stored*/}
        
      </div>
    </div>

  );
}

// can add default parameters [just do <component_name>.defaultProps = {title:''}]
// can als add defaut types [<component_name>.propTypes = {title: PropTypes.string etc}]

export default App;
