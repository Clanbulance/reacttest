import {useState} from "react";
import "./styles/app.css"
import { CreateTask } from "./components/CreateTask";

function App(){
    return(
        <div className="taskboard">
           <table>
                <tr>
                    <th><h2>ID</h2></th>
                    <th><h2>Task</h2></th>
                    <th><h2>Description</h2></th>
                    <th><h2>Status</h2></th>
                    <th><h2></h2></th>
                </tr>
                {CreateTask()}
           </table>
        </div>
    )
}


export { App }