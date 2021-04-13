import React, {createContext, useState} from 'react';
import {useToDos, useProjects} from '../hooks';

const ToDoContext = createContext()

function ToDoContextProvider({children}) {
    const defaultProject = "Heute"
    const[selectedProject, setSelectedProject] = useState(defaultProject)


    const toDos = useToDos()
    const projects = useProjects(toDos)
    return (
        <ToDoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject,
                    toDos,
                    projects
                
                }
            }
        
        
        >
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContextProvider, ToDoContext} 