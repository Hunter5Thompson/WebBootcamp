/* eslint-disable no-undef */
import React from 'react';
import {Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function ToDoForm({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    projects, 
    showButtons = false,
    setShowButtons = false
}){ 


    return(
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form onSubmit={handleSubmit} className="ToDoForm">
                    <div className="text">
                        {
                            heading &&
                            <h3>{heading}</h3>
                        }
                        <input 
                            type='text'
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
                        <DatePicker 
                            value={day}
                            onChange={day => setDay(day)}
                            />
                    </div>
                    <div className="pick-time">
                        <div className="title">
                            <Clock />
                            <p>Wähle eine Uhrzeit aus</p>
                        </div>
                        <TimePicker
                        value={time}
                        onChange={time => setTime(time)}
                         />
                    </div>
                    <div className="pick-project">
                        <div className="title">
                            <Palette />
                            <p>Wähle ein Projekt aus</p>
                            </div>
                        <div className="projects">
                                {
                                    projects.map(projects =>
                                        <div className="project" key={projects.id}>
                                            {projects.name}
                                        </div>
                                        )
                                }
                            </div>
                            </div>
                            {
                                showButtons &&  
                                <div>
                                     <div className="cancel" onClick={() => setShowModal(false)}>
                                                  <X size='40'/>
                                    </div>
                                        <div className="confirm">
                                             <button>+ Hinzufügen</button>
                                          </div>
                                </div>
                            }
                </form>
           </MuiPickersUtilsProvider>

    )
}

export default ToDoForm;