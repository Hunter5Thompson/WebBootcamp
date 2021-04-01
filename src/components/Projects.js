import React, {useState} from 'react';
import Projekt from './Projekt';
import AddNewProject from './AddNewProject';
import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons';

function Projects() {
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1EC94C" : "#000000"

    const projects = [
        {id : 1, name : 'privat', numOfTodos : 2},
        {id : 2, name : 'privat', numOfTodos : 5},
        {id : 3, name : 'privat', numOfTodos : 1},
        {id : 7, name : 'arbeit', numOfTodos : 3},
        
    ]

    return(
        <div className="Projects">
          <div className="header">
              <div className="title">
                  <Palette size="20" />
                  <p>
                      Projekte
                  </p>
              </div>
              <div className="btns">
                  {
                      showMenu && projects.length > 0 &&
                          <span className='edit' onClick={ () => setEdit(edit = !edit)}>
                          <PencilFill size="16" color={pencilColor}/>
                      </span>
                  }
                  <AddNewProject />
                  <span className='arrow'>
                      <CaretUp size="20"/>
                  </span>
              </div>
          </div>
            <div className="items">
                {
                    projects.map(project =>
                        <Projects 
                            project={project}
                            key={project.id}
                            edit={edit}
                            />
                        )
                }
            </div>
            </div>

    )
}

export default Projects;