/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons'
import AddNewProject from './AddNewProject'
import Projekt from './Projekt'
import { ToDoContext} from '../context'
import {useSpring, animated} from 'react-spring'

function Projects(){
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false)
    const pencilColor = edit ? "#1EC94C" : "#000000"

   const {projects } = useContext(ToDoContext)

       //Animations
       const spin = useSpring({
        transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)'
    })

    const menuAnimation = useSpring({
        display : showMenu ? 'block' : 'none',
        lineHeight : showMenu ? '1.4' : '0'
    })

    return (
        <div className='Projects'>
            <div className="header">
                <div className="title">
                    <Palette size="18" />
                    <p>Projekte</p>
                </div>
                <div className="btns">
                    {
                        showMenu && projects.length > 0 &&
                        <span className='edit' onClick={ () => setEdit(edit => !edit)}>
                            <PencilFill size="15" color={pencilColor}/>
                        </span>
                    }
                    <AddNewProject />
                    <animated.span className='arrow'
                    onClick={() =>setShowMenu(!showMenu)}
                    style={spin}
                    >
                        <CaretUp size="20" />
                    </animated.span>
                </div>
            </div>
            <animated.div style={menuAnimation} className="items">
                {
                    projects.map( project => 
                        <Projekt
                            project={project}
                            key={project.id}
                            edit={edit}
                        />
                    )
                }
            </animated.div>
        </div>
    )
}

export default Projects
