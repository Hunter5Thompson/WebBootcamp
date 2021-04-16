/* eslint-disable jsx-a11y/no-redundant-roles */


import React from 'react'

function ProjektForm({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}){

    return(
        <form onSubmit={handleSubmit} className='ProjektForm'>
            <h3>{heading}</h3>
            <input
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                type="text"
                placeholder="Projekt Name..."
                autoFocus

            />
            <button className='cancel' role='button' onClick={() => setShowModal(false)}>
                Abbruch
            </button>
            <button className="confirm"> 
                {confirmButtonText}
            </button>
        </form>
    )
}

export default ProjektForm