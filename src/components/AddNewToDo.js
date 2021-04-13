import React, {useState, useContext, useEffect} from 'react';
import Modal from './Modal';
import ToDoForm from './ToDoForm';
import {ToDoContext} from '../context';

function AddNewToDo() {
    const {selectedProject} = useContext(ToDoContext);


    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('');
    const[day, setDay] = useState(new Date());
    const[time, setTime] = useState(new Date());
    const [toDoProject, setToDoProject] = useState(selectedProject)

  

    const projects = [
      
        {id : 2, name : "Privat", numOfTodos : 5},
        {id : 3, name : 'Andere', numOfTodos : 1},
        {id : 7, name : 'Arbeit', numOfTodos : 3},
        
    ]

    function handleSubmit(e) {


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