
import React, {useState, useContext} from 'react';
import RenameProjekt from './RenameProjekt';
import {Pencil, XCircle} from 'react-bootstrap-icons';
import Modal from './Modal';
import {ToDoContext} from '../context';
import firebase from '../firebase';

function Projekt({project, edit}) {

    const{defaultProject, selectedProject, setSelectedProject} = useContext(ToDoContext)

    // Inhalt oder CONTEXT
    


    // Status oder STATE
    const[showModal, setShowModal] = useState(false)
    const deleteProject = project => {
        firebase
            .firestore()
            .collection('Projekte')
            .doc(project.id)
            .delete()

    }

    return(
        <div className="Projekt">
            <div className="name"
                onClick={() => setSelectedProject(project.name)}
            
            >
                {project.name}
            </div>
            <div className="btns">
                {
                                  edit?
                                  <div className="edit-delete">
                                  <span 
                                        className="edit"
                                        onClick={() => setShowModal(true)}
                                        >
                                      <Pencil size="15" />
                                  </span>
                                  <span 
                                        className="delete"
                                        onClick={() =>deleteProject(project)}
                                        >
                                      <XCircle size="15" />
                                  </span>
                              </div>
                              :
                              project.numOfTodos === 0 ?
                              "" 
                              :
                              <div className="total-todos">
                                  {project.numOfTodos}
                              </div>
                }
            </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <RenameProjekt project={project} setShowModal />
                </Modal>
        </div>
    )
}

export default Projekt;