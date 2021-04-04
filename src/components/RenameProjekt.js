import React, {useState} from 'react';
import ProjektForm from './ProjektForm';

function RenameProjekt({project, setShowModal}) {
    const [newProjektName, setNewProjektName] = useState(project.name)

    function handleSubmit(e) {

    }

    return(
        <div className="RenameProjekt">
            <ProjektForm
                    handleSubmit={handleSubmit}
                    heading='Projekt editieren!'
                    value={newProjektName}
                    setValue={setNewProjektName}
                    setShowModal={setShowModal}
                    confirmButtonText= "+ Bestätigen"
                />
            </div>

    )
}

export default RenameProjekt;