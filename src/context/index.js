import React, {createContext, useState} from 'react';

const ToDoContext = createContext()

function ToDoContextProvider({children}) {
    const defaultProject = "Heute"
    const[selectedProject, setSelectedProject] = useState(defaultProject)
    return (
        <ToDoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject
                
                }
            }
        
        
        >
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContextProvider, ToDoContext} 