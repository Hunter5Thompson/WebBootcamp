import React, {useContext} from 'react';
import Next7Days from './Next7Days';
import ToDo from './ToDo';
import {ToDoContext} from '../context';

function ToDos() {
    const {toDos, selectedProject} = useContext(ToDoContext)

    return(
        <div className="ToDos">
           <div className="selected-project">
               {selectedProject}
           </div>
            <div className="todos">
                {
                    selectedProject === "nächste 7 Tage" ?
                    <Next7Days toDos={toDos} />
                    :
                    toDos.map(todo =>
                        <ToDo todo={todo} key={todo.id} />
                        )
                }
            </div>
        </div>        
    )
}

export default ToDos;