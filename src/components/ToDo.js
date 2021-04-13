import React, {useState} from 'react';
import { ArrowClockwise, CheckCircleFill,Circle, Trash } from 'react-bootstrap-icons';

function ToDo({todo}) {
    const [hover, setHover] = useState(false)

    return(
        <div className="ToDo">
            <div
             className="todo-container"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}   
             > 
                <div className="check-todo">
                {
                    todo.checked ?
                    <span className="checked">
                        <CheckCircleFill color='#8b0000'/>
                    </span>
                    :
                    <span className="unchecked">
                        <Circle color={todo.color}/>
                    </span>
                }
            </div>
            <div className="text">
                <p>{todo.text}</p>
                <span>{todo.uhrzeit}-{todo.projektName}</span>
                <div className={`line ${todo.checked ? 'line-through' : '' }`}></div>
            </div>
            <div className="add-top-next-day">
                {

                    todo.checked &&
                    <span>
                        <ArrowClockwise />
                    </span>
                }
            </div>
            <div className="delete-todo">
                {
                  (hover || todo.checked)   &&
                    <span>
                        <Trash />
                    </span>
                }
            </div>
        </div>
        </div>

    )
}

export default ToDo;