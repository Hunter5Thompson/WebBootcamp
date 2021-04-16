import React, {useState, useContext} from 'react';
import ProjektForm from './ProjektForm';
import firebase from 'firebase';
import {ToDoContext} from '../context'

function RenameProjekt({project, setShowModal}) {
    const [newProjektName, setNewProjektName] = useState(project.name)

    const { selectedProject, setSelectedProject } = useContext(ToDoContext)

    const renameProjekt = (project, newProjektName) => {
        const projectsRef = firebase.firestore().collection('Projekte')
        const toDosRef = firebase.firestore().collection('ToDos')

        const {name: oldProjektName} = project

        projectsRef
        .where('name', '==', newProjektName)
        .get()
        .then(querySnapshot => {
            if(!querySnapshot.empty){
                alert('Es existiert schon ein Projekt mit diesem Namen')
            }else{
                projectsRef
                    .doc(project.id)
                    .update({
                        name : newProjektName
                    })
                    .then( () => {
                        toDosRef
                            .where('projectName', '==', oldProjektName)
                            .get()
                            .then( querySnapshot => {
                                querySnapshot.forEach( doc => {
                                    doc.ref.update({
                                        projectName : newProjektName
                                    })
                                })
                            })
                            .then( () => {
                                if(selectedProject === oldProjektName){
                                    setSelectedProject(newProjektName)
                                }
                            })
                    })
            }
        })
}

    function handleSubmit(e) {
        e.preventDefault();

        renameProjekt(project, newProjektName);
        console.log(setShowModal);
        setShowModal(false);
    }

    return(
        <div className="RenameProjekt">
            
            <ProjektForm
                    handleSubmit={handleSubmit}
                    heading='Projekt editieren!'
                    value={newProjektName}
                    setValue={setNewProjektName}
                    setShowModal={setShowModal}
                    confirmButtonText= "+ Bestätigen"
                />
            </div>

    )
}






export default RenameProjekt;

