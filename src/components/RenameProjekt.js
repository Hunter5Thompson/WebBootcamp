import React, {useState, useContext} from 'react';
import ProjektForm from './ProjektForm';
import firebase from 'firebase';
import {ToDoContext} from '../context'

function RenameProjekt({project, setShowModal}) {
    const [newProjectName, setNewProjectName] = useState(project.name)

    const { selectedProject, setSelectedProject } = useContext(ToDoContext)

    const renameProject = (project, newProjectName) => {
        const projectsRef = firebase.firestore().collection('Projekte')
        const toDosRef = firebase.firestore().collection('ToDos')

        const {name: oldProjectName} = project

        projectsRef
        .where('name', '==', newProjectName)
        .get()
        .then(querySnapshot => {
            if(!querySnapshot.empty){
                alert('Es existiert schon ein Projekt mit diesem Namen')
            }else{
                projectsRef
                    .doc(project.id)
                    .update({
                        name : newProjectName
                    })
                    .then( () => {
                        toDosRef
                            .where('projektName', '==', oldProjectName)
                            .get()
                            .then( querySnapshot => {
                                querySnapshot.forEach( doc => {
                                    doc.ref.update({
                                        projektName : newProjectName
                                    })
                                })
                            })
                            .then( () => {
                                if(selectedProject === oldProjectName){
                                    setSelectedProject(newProjectName)
                                }
                            })
                    })
            }
        })
}

    function handleSubmit(e) {
        e.preventDefault();

        renameProject(project, newProjectName);
       
        
    }

    return(
        <div className="RenameProjekt">
            
            <ProjektForm
                    handleSubmit={handleSubmit}
                    heading='Projekt editieren!'
                    value={newProjectName}
                    setValue={setNewProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText= "+ Bestätigen"
                    
                /> 
            </div>
           

    )
    
}






export default RenameProjekt;

