import React, {useState} from 'react';
import Modal from './Modal';
import {Bell, CalendarDay, Clock, Palette} from 'react-bootstrap-icons';

function AddNewToDo() {
    const [ showModal, setShowModal] = useState(false)
    const [text, setText] = useState('');

    return(
        <div className="AddNewToDo">
            <div className="btn">
                <button onClick={() =>setShowModal(true)}>
                    + New ToDo 
                </button>
            </div>
         
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form>
                    <div className="text">
                        <h3>Neues ToDo!</h3>
                        <input 
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder='To do...'
                            autoFocus
                            />
                    </div>
                    <div className="remind">
                        <Bell />
                        <p>
                            Erinnere Mich
                        </p>
                    </div>
                    <div className="pick-day">
                        <div className="title">
                            <CalendarDay />
                            <p>Wähle einen Tag aus</p>
                        </div>
                        date-picker
                    </div>
                    <div className="pick-time">
                        <div className="title">
                            <Clock />
                            <p>Wähle eine Uhrzeit aus</p>
                        </div>
                        time-picker
                    </div>
                    <div className="project-time">
                        <div className="title">
                            <Palette />
                            <p>Wähle ein Projekt aus</p>
                            </div>
                        <div className="projekte">
                            <div className="projekt active">
                                privat
                            </div>
                            <div className="projekte">
                                arbeit
                            </div>
                            </div>
                    </div>
                </form>
            </Modal>
         </div>

    )
}

export default AddNewToDo;