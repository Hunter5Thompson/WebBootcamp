import React, {useState} from 'react';
import Modal from './Modal';

function AddNewToDo() {
    const [ showModal, setShowModal] = useState(false)
    return(
        <div className="AddNewToDo">
            <div className="btn">
                <button onClick={() =>setShowModal(true)}>
                    + New ToDo 
                </button>
            </div>
         
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    Hello Asshole!
                    <button onClick={() =>setShowModal(false)}>
                        hide
                    </button>
                </div>
            </Modal>

            
            </div>

    )
}

export default AddNewToDo;