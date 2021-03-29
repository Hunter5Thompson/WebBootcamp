import React, {useState} from 'react';
import Modal from './Modal';

function AddNewToDo() {
    const [ showModal, setShowModal] = useState(false)
    return(
        <div class="AddNewToDo">
            <button>
                + New ToDo
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    Hello Asshole!
                </div>
            </Modal>

            
            </div>

    )
}

export default AddNewToDo;