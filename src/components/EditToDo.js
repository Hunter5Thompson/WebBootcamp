/* eslint-disable no-undef */

import React, {useState, useContext} from 'react';
import ToDoForm from './ToDoForm';
import {ToDoContext} from '../context';

function EditToDo() {

    
    const [text, setText] = useState();
    const[day, setDay] = useState();
    const[time, setTime] = useState();
    const [toDoProject, setToDoProject] = useState();


    const {selectedToDo, projects} = useContext(ToDoContext)
  

    function handleSubmit() {

    }

    return(
        <div>
            {       selectedToDo &&
                        <div className="EditToDo">
                        <div className="header">
                            Anpassung ToDo
                        </div>
                        <div className="container">
                            <ToDoForm 
                                handleSubmit={handleSubmit}
                                text={text}
                                setText={setText}
                                day={day}
                                setDay={setDay}
                                toDoProject={toDoProject}
                                setToDoProject={setToDoProject}
                                time={time}
                                setTime={setTime}
                                projects={projects}
                            
                            />
                        </div>
                        </div>
            }
        </div>

    )
}

export default EditToDo;