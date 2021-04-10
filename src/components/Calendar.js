import React, { useContext} from 'react';
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';
import {calendarItems} from '../constants';
import {ToDoContext} from '../context';

function Calender() {

    const {setSelectedProject} = useContext(ToDoContext)
    

    return(
        <div className="Calendar">
                <div className="header">
                    <div className="title">
                        <CalendarDate size="20"/>
                        <p>Kalender</p>
                </div>
                <div className="btns">
                    <span>
                        <CaretUp size="20" />
                    </span>
                </div>
            </div>
            <div className="items">
                {
                    calendarItems.map(item => 
                        <div 
                        className="item"
                         key={item}
                         onClick={() => setSelectedProject(item)}
                         
                         >
                             {item}
                        </div>
                        )
                }
            </div>
       </div>             
    )
}

export default Calender;