import React from 'react';
import RenameProjekt from './RenameProjekt';
import {Pencil, XCircle} from 'react-bootstrap-icons';

function Projekt({project, edit}) {

    return(
        <div className="Projekt">
            <div className="name">
                {Projekt.name}
            </div>
            <div className="btns">
                {
                                  edit?
                                  <div className="edit-delete">
                                  <span className="edit">
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
        </div>
    )
}

export default Projekt;