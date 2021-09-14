import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit= (e) => {
        e.preventDefault();

        if(!text){
            alert("Please enter a task!")
            return
        }

        onAdd({text,time,reminder})
        setText('')
        setTime('')
        setReminder(false)
    }
    

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type='text'
                    placeholder='Add Task'
                    value = {text}
                    onChange={(e) => setText(e.target.value)}
                ></input>
            </div>
            <div className = 'form-control'>
                <label>Day & Time</label>
                <input type='text' 
                    placeholder='Add Day and Time'
                    value = {time}
                    onChange={(e) => setTime(e.target.value)}
                    ></input>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox'
                    value = {reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                ></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
