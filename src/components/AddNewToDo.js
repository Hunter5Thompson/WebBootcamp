import React, {useState, useContext, useEffect} from 'react';
import Modal from './Modal';
import ToDoForm from './ToDoForm';
import {ToDoContext} from '../context';
import {calendarItems} from '../constants';
import firebase from '../firebase';
import randomcolor from 'randomcolor';
import moment from 'moment';

function AddNewToDo() {
    const {projects, selectedProject} = useContext(ToDoContext);


    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('');
    const[day, setDay] = useState(new Date());
    const[time, setTime] = useState(new Date());
    const [toDoProject, setToDoProject] = useState(selectedProject)

  

  

    function handleSubmit(e) {
        e.preventDefault();
        if(text && !calendarItems.includes(toDoProject)){
            firebase
                .firestore()
                .collection('ToDos')
                .add(
                    {
                        text : text,
                        date : moment(day).format('DD/MM/YYYY'),
                        day  : moment(day).format('d'),
                        time : moment(time).format('hh:mm'), 
                        checked : false,
                        color : randomcolor(),
                        projektName : toDoProject
                    }
                )

                setShowModal(false)
                setText('')
                setDay(new Date())
                setTime(new Date())
        }

    }

    useEffect(() =>{
        setToDoProject(selectedProject);    
    }, [selectedProject])

    return(
        <div className="AddNewToDo">
            <div className="btn">
                <button onClick={() =>setShowModal(true)}>
                    + New ToDo 
                </button>
            </div>
         
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ToDoForm 
                    handleSubmit={handleSubmit}
                    heading = 'Neues ToDo hinzufügen'
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    toDoProject={toDoProject}
                    setToDoProject={setToDoProject}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                
                />

            </Modal>
         </div>

    )
}

export default AddNewToDo;