
import React, {useState, useContext} from 'react';
import RenameProjekt from './RenameProjekt';
import {Pencil, XCircle} from 'react-bootstrap-icons';
import Modal from './Modal';
import {ToDoContext} from '../context';

function Projekt({project, edit}) {

    // Inhalt oder CONTEXT
    const {setSelectedProject} = useContext(ToDoContext)


    // Status oder STATE
    const[showModal, setShowModal] = useState(false)

    return(
        <div className="Projekt">
            <div className="name"
                onClick={() => setSelectedProject(Projekt.name)}
            
            >
                {Projekt.name}
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
                                  <span className="delete">
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