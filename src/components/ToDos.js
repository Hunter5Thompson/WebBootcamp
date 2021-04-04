import React from 'react';
import Next7Days from './Next7Days';
import ToDo from './ToDo';

function ToDos() {
    const selectedProject = "heute"

    const todos = [
        {
            id: '45ddss',
            text: 'Listen to Motherfucking Techno',
            uhrzeit: "12:12 AM",
            date: '04/04/2021',
            day: "1",
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