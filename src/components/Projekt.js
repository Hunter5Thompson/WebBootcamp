import React, {useState} from 'react';
import RenameProjekt from './RenameProjekt';
import {Pencil, XCircle} from 'react-bootstrap-icons';
import Modal from './Modal';

function Projekt({project, edit}) {
    const[showModal, setShowModal] = useState(false)

    return(
        <div className="Projekt">
            <div className="name">
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