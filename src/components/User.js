import React from 'react';
import logo from "../images/logo.jpg";

function User() {

    return(
        <div className='User'>
            <div className="logo">
                <image src={logo} alt ="logo" />
            </div>
            <div class="info">
                <p>Mariechens ToDoListe</p>
                <a href="#">Logout!</a>
            </div>
         </div>
    )
}

export default User;