import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay]= useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Info Not Provided')
            return 
        }
        onAdd({text, day, reminder})
    }

    return (
        <form className='Input_Container' onSubmit={onSubmit}>
            <div className= 'Input_Layout'>
                <label>Task</label>
                <input type= 'text' placeholder='Add Task'
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className= 'Input_Layout'>
                <label>Day & Time</label>
                <input type= 'text' placeholder='Add Date'
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className= 'Input_Layout check_reminder'>
                <label>Reminder</label>
                <input type= 'checkbox' checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
