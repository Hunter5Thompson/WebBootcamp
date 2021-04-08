/* eslint-disable no-undef */

import React, {useState} from 'react';
import ToDoForm from './ToDoForm';

function EditToDo() {

    
    const [text, setText] = useState();
    const[day, setDay] = useState();
    const[time, setTime] = useState();

    const projects = [
        {id : 1, name : "privat", numOfTodos : 2},
        {id : 2, name : "privat", numOfTodos : 5},
        {id : 3, name : 'andere', numOfTodos : 1},
        {id : 7, name : 'arbeit', numOfTodos : 3},
        
    ]

    function handleSubmit() {

    }

    return(
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
                    time={time}
                    setTime={setTime}
                    projects={projects}
                
                />
            </div>
            </div>

    )
}

export default EditToDo;