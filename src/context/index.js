import React, {createContext, useState} from 'react';
import {useToDos, useProjects, useFilterToDos, useProjectsWithStats} from '../hooks';

const ToDoContext = createContext()

function ToDoContextProvider({children}) {
    const defaultProject = "Heute"
    const[selectedProject, setSelectedProject] = useState(defaultProject)

    

    const toDos = useToDos()
    const projects = useProjects()
    const projectsWithStats = useProjectsWithStats(projects, toDos)
    const filteredToDos = useFilterToDos(toDos, selectedProject)
    return (
        <ToDoContext.Provider
            value={
                {
                    defaultProject,
                    selectedProject,
                    setSelectedProject,
                    toDos : filteredToDos,
                    projects : projectsWithStats
                
                }
            }
        
        
        >
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContextProvider, ToDoContext} 


