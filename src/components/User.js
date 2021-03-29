import React from 'react'
import logo2 from "../images/logo2.jpg"

function User(){

    return (
        <div className='User'>
            <div className="logo2">
                <img src={logo2} alt="logo2" />
            </div>
            <div className='info'>
                <p>Mariechens ToDo List</p>
                // eslint-disable-next-line 
                <a href="#">Logout!</a>
            </div>
        </div>
    )
}

export default User