import React, {useContext} from 'react';
import Next7Days from './Next7Days';
import ToDo from './ToDo';
import {ToDoContext} from '../context';

function ToDos() {
    const {selectedProject} = useContext(ToDoContext)

    const todos = [
        {
            id: '45ddss',
            text: 'Listen to Motherfucking Techno',
            uhrzeit: "12:15 AM",
            date: '04/04/2021',
            day: "5",
            checked: true,
            color: "#00ff00",
            project: "arbeit"
        }
    ]

    return(
        <div className="ToDos">
           <div className="selected-project">
               {selectedProject}
           </div>
            <div className="todos">
                {
                    selectedProject === "nächste 7 Tage" ?
                    <Next7Days todos={todos} />
                    :
                    todos.map(todo =>
                        <ToDo todo={todo} key={todo.id} />
                        )
                }
            </div>
        </div>        
    )
}

export default ToDos;