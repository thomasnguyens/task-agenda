import { useState } from "react";



const AddTask = (props) => {
    // 
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false) // set reminder default false


    // [most confused here] 
    // after submitted, it will display this ! 
    // submit handler! 
    const onSubmit =  (e) => {
        // not entirely sure what this does 
        e.preventDefault() 

        // if no task, alerts them to add a task
        if (!text) {
            alert('Please add a task')
            return
        }

        // after submit is clicked, will send these inputs to onAdd() function in app.js
        props.onAdd({text, day, reminder})

        // at the same time, will reset setText,setDay,setReminder so that new tasks can be added
        setText('')
        setDay('')
        setReminder(false)
    }

    return ( 
        // creating the addTask forms!
        <form className="add-form" onSubmit = {onSubmit}>
            <div className="form-control">
                <label> Task </label>
                {/* setting value and onChange values */}
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value= {text} 
                    onChange = {(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label> Add Date & Time </label>
                <input 
                    type='text' 
                    placeholder='Ex: Feb 04 at 10:30am' value= {day} onChange = {(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label> Set Reminder </label>
                <input 
                    type='checkbox'
                    checked = {reminder}
                    value= {reminder} 
                    onChange = {(e) => setReminder(e.currentTarget.checked)} //since it is submit button, it will check if its true or false first
                    />
            </div>
            <button
                type="submit"
                className="btn btn-block"
                value="Save Task"
            >
                Save Task
            </button>
            
        </form>
     );
}
 
export default AddTask;