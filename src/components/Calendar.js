import React, { useContext, useState } from 'react';
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';
import {calendarItems} from '../constants';
import {ToDoContext} from '../context';
import {useSpring, animated} from 'react-spring';

function Calender() {
    const [showMenu, setShowMenu] = useState(true)


    const {setSelectedProject} = useContext(ToDoContext)
    

    //Animations
    const spin = useSpring({
        transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)'
    })

    const menuAnimation = useSpring({
        display : showMenu ? 'block' : 'none',
        lineHeight : showMenu ? '1.4' : '0'
    })

    return(
        <div className="Calendar">
                <div className="header">
                    <div className="title">
                        <CalendarDate size="20"/>
                        <p>Kalender</p>
                </div>
                <animated.div style={spin}
                              onClick={() =>setShowMenu(!showMenu)}
                              className="btns">
                    <span>
                        <CaretUp size="20" />
                    </span>
                </animated.div>
            </div>
            <animated.div style={menuAnimation} className="items">
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
            </animated.div>
       </div>             
    )
}

export default Calender;