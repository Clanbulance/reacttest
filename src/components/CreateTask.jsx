
import {useState} from "react";

function CreateTask(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, AddTask] = useState([
        {id: "1", name: "Create structure", description: "We will try to create the layout", state: false},
        {id: "2", name: "add css ", description: "", state: true},
        {id: "3", name: "add addbutton", description: "Find out how to create a new one", state: false}
    ])

function AddTaskToList(){
        const newTask = {
            id: (tasks.length + 1).toString(),
            name,
            description,
            state: false,  
            }

        AddTask([...tasks, newTask])
        
    }
        
    return (
        <>
            <tr key="NewTask">
                <td>{tasks.length +1 }</td>

                <td><input type="text" value={name} onChange={(event) => setName(event.target.value)}/></td>
                <td><input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></td>

                <td><input type="checkbox" name="" id="" /></td>
                <td><button type="button" onClick={() => {AddTaskToList()}}>Add Task</button></td>
            </tr>
               {tasks.map((task) => (
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                    <td>{task.state ? "Done" : "Not finished"}</td>
                    <td>button soon</td>
               </tr>
               ))}
        </>
        )
}



export {CreateTask}