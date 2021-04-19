/* eslint-disable no-undef */

import React, {useState, useContext, useEffect} from 'react';
import ToDoForm from './ToDoForm';
import {ToDoContext} from '../context';
import moment from 'moment';


function EditToDo() {

    
    const [text, setText] = useState();
    const[day, setDay] = useState();
    const[time, setTime] = useState();
    const [toDoProject, setToDoProject] = useState();


    const {selectedToDo, projects} = useContext(ToDoContext)


    useEffect(() => {
        if(selectedToDo){
            setText(selectedToDo.text)
            setDay(moment(selectedToDo.date, 'DD/MM/YYYY'))
            setTime(moment(selectedToDo.time, 'HH:mm'))
            setToDoProject(selectedToDo.projectName)
        }
    }, [selectedToDo])
  

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