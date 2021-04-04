import React from 'react';

function ToDo({todo}) {

    return(
        <div className="ToDo">
            {todo.text}
            </div>

    )
}

export default ToDo;