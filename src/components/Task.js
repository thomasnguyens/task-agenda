import {FaTimes} from 'react-icons/fa'

// doesn't matter what function, if your calling outside of fxn, must use props!
const Task = (props) => {
    return ( 
        // on doubleclick event will be run
        // if props.task.reminder === true it will set it as 'reminder font', otherwise it will be display nothing
        // don't need to set props.task.reminder = True because it is assumed that's what it means
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => 
        props.onToggle(props.task.id)}>  
            <h3> {props.task.text} 
            <FaTimes style= {{ color: 'red', cursor: 'pointer'}} 
            onClick={() => props.onDelete(props.task.id)}/> </h3> {/* need to call id in deleteTaskHandler(id)*/}
            <p> {props.task.day}</p>
        </div>
     );
}
 
export default Task;