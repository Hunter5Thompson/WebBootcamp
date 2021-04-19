import React, {useEffect, useRef, useContext} from 'react';
import {ToDoContext} from '../context'

function Sidebar({children}) {

    const {setSelectedToDo} = useContext(ToDoContext)
    const sidebarRef = useRef();

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    const handleClick = e => {
        if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
            setSelectedToDo(undefined)
        }
    }


    return(
        <div 
            className="Sidebar"
            ref={sidebarRef}
        >
            {children}
            </div>

    )
}

export default Sidebar;