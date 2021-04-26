/* eslint-disable no-undef */

import React, {useState, useContext, useEffect} from 'react';
import ToDoForm from './ToDoForm';
import {ToDoContext} from '../context';
import moment from 'moment';
import firebase from '../firebase';


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
            setTime(moment(selectedToDo.time, 'hh:mm A'))
            setToDoProject(selectedToDo.projectName)
        }
    }, [selectedToDo])
  

    useEffect(() => {
        if(selectedToDo){
            firebase
            .firestore()
            .collection('ToDos')
            .doc(selectedToDo.id)
            .update({
                text,
                date : moment(day).format('DD/MM/YYYY'),
                day : moment(day).format('d'),
                time : moment(time).format('hh:mm A'),
                projectName : selectedToDo
            })
        }
    }, [text, day, time, selectedToDo])


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