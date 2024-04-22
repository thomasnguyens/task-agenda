import Task from "./Task";



const Tasks = (props) => {
    
    // importing usestate Hook from react directly
    // useState is a hook if we want to render a real time usage for it
    // USESTATE IS IMMUTABLE !! cannot push new data into here, instead u would use setTask for that
    
    return ( 
        <>
            {/* mapping out the array into a list using map method */}
            {props.tasks.map((task) => (
                // calling to Task.js the parameters declared from App.js
                // notice how there is always a props. because thats how you call from outside the function
                <Task key = {task.id} task = {task} 
                onDelete = {props.onDelete} onToggle = {props.onToggle}
                /> 
            ))}
        </>
     );
}
 
export default Tasks;