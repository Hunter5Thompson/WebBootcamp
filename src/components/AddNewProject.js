import React, {useState} from 'react';
import {Plus} from 'react-bootstrap-icons';
import Modal from './Modal';
import ProjektForm from './ProjektForm';
import firebase from '../firebase';

function AddNewProject() {
    const [showModal,setShowModal] = useState(false);
    const [projectName, setProjektName] = useState('')
    function handleSubmit(e){
        e.preventDefault();

        if(projectName){
            const projectsRef = firebase.firestore().collection('Projekte')

            projectsRef
                .where('name', '==', projectName)
                .get()
                .then(querySnapshot => {
                    if(querySnapshot.empty){
                        projectsRef
                        .add(
                            {
                                name : projectName
                            }
                        )
                    }else{
                        alert('Das Projekt existiert schon!')
                    }
                })
            setShowModal(false)
            setProjektName('')
        }
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
                    value={projectName}
                    setValue={setProjektName}
                    setShowModal={setShowModal}
                    confirmButtonText= "+ Füge Projekt hinzu"
                />
            </Modal>
        </div>

    )
}

export default AddNewProject;