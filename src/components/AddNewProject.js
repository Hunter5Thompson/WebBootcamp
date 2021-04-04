import React, {useState} from 'react';
import {Plus} from 'react-bootstrap-icons';
import Modal from './Modal';
import ProjektForm from './ProjektForm';

function AddNewProject() {
    const [showModal,setShowModal] = useState(false);
    const [projektName, setProjektName] = useState('')
    function handleSubmit(e){

    }

    return(
        <div className="AddNewProject">
                <div className="add-button">
                    <span onClick={() => setShowModal(true)}>
                        <Plus size="20"/>
                    </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjektForm 
                    handleSubmit={handleSubmit}
                    heading='Neues Projekt!'
                    value={projektName}
                    setValue={setProjektName}
                    setShowModal={setShowModal}
                    confirmButtonText= "+ Füge Projekt hinzu"
                />
            </Modal>
        </div>

    )
}

export default AddNewProject;