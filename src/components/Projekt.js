
import React, {useState, useContext} from 'react';
import RenameProjekt from './RenameProjekt';
import {Pencil, XCircle} from 'react-bootstrap-icons';
import Modal from './Modal';
import {ToDoContext} from '../context';
import firebase from '../firebase';
import {useSpring,useTransition, animated} from 'react-spring'

function Projekt({project, edit}) {
    // Inhalt oder CONTEXT

    const{defaultProject, selectedProject, setSelectedProject} = useContext(ToDoContext)

    
    
    const fadeIn = useSpring({
        from : {mirginTop : '50px', opacity : 0},
        to : { mirginTop : '0', opacity : 1},
    })

    const btnTransition = useTransition(edit, {
        from : { opacity :  0, right : '-20px'},
        enter : { opacity :  1, right : '00px'},
        leave : { opacity :  0, right : '-20px'}
    }
        )

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
        <animated.div style={fadeIn}className="Projekt">
            <div className="name"
                onClick={() => setSelectedProject(project.name)}
            
            >
                {project.name}
            </div>
            <div className="btns">
                {
                    btnTransition((props, editProject) =>
                    editProject?
                    <animated.div style={props} className="edit-delete">
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
                </animated.div >
                :
                project.numOfTodos === 0 ?
                "" 
                :
                <animated.div style={props} className="total-todos">
                    {project.numOfTodos}
                </animated.div >
                )
  }
                                  
            </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <RenameProjekt project={project} setShowModal />
                </Modal>
        </animated.div>
    )
}

export default Projekt;