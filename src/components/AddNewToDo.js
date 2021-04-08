import React, {useState} from 'react';
import Modal from './Modal';
import ToDoForm from './ToDoForm';

function AddNewToDo() {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('');
    const[day, setDay] = useState(new Date());
    const[time, setTime] = useState(new Date());

    const projects = [
        {id : 1, name : "privat", numOfTodos : 2},
        {id : 2, name : "privat", numOfTodos : 5},
        {id : 3, name : 'andere', numOfTodos : 1},
        {id : 7, name : 'arbeit', numOfTodos : 3},
        
    ]

    function handleSubmit(e) {


    }


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
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                
                />

            </Modal>
         </div>

    )
}

export default AddNewToDo;