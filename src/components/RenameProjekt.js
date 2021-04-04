import React, {useState} from 'react';
import ProjektForm from './ProjektForm';

function RenameProjekt({projekt, setShowModal}) {
    const [newProjektName, setNewProjektName] = useState(projekt.name)

    function handleSubmit(event) {
        
    }

    return(
        <div className="RenameProjekt">
            <ProjektForm
                    handleSubmit={handleSubmit}
                    heading='Neues Projekt!'
                    value={newProjektName}
                    setValue={setNewProjektName}
                    setShowModal={setShowModal}
                    confirmButtonText= "+ Füge Projekt hinzu"
                />
            </div>

    )
}

export default RenameProjekt;