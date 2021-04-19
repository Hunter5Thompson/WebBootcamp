import React, {useState, useContext} from 'react';
import { ArrowClockwise, CheckCircleFill,Circle, Trash } from 'react-bootstrap-icons';
import firebase from '../firebase';
import moment from 'moment';
import {ToDoContext} from '../context'


function ToDo({todo}) {
    const [hover, setHover] = useState(false)

    const{selectedToDo, setSelectedToDo} = useContext(ToDoContext)

    const handleDelete = todo => {
        deleteToDo(todo)

        if(selectedToDo === todo) {
            setSelectedToDo(undefined)
        }
    }

    const deleteToDo = todo => {
        firebase
            .firestore()
            .collection('ToDos')
            .doc(todo.id)
            .delete()
    }

    const checkToDo = todo => {
        firebase
        .firestore()
        .collection('ToDos')
        .doc(todo.id)
        .update({
            checked : !todo.checked
        })

    } 
//object welches den Inhalt erzeugt das toDO am Nächsten TAg zu wiederholen. 
//Moment Nutzung als JS date Obejct
//RepeatedToDo Obeject enthält alle information des alten ToDO
//checke wird wieder auf unchecked getoggelt sowie die Datensänderung (deshalb JS dateObj)
//day wird ebenfalls erhöht
    const repeatNextDay = toDo => {
        const nextDayDate = moment(todo.date, "DD/MM/YYYY").add(1, 'days')

        const repeatedToDo = {
            ...todo,
            checked : false,
            date : nextDayDate.format('DD/MM/YYYY'),
            day : nextDayDate.format('d')
        }

        delete repeatedToDo.id

        firebase
        .firestore()
        .collection('ToDos')
        //.doc(todo.id)
        .add(repeatedToDo)


    }

    return(
        <div className="ToDo">
            <div
             className="todo-container"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}   
             > 
                <div className="check-todo"
                onClick={() => checkToDo(todo)}
                >
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
            <div
                 className="text"
                onClick={() =>setSelectedToDo(todo)}
            >
                <p>{todo.text}</p>
                <span>{todo.time}-{todo.projektName}</span>
                <div className={`line ${todo.checked ? 'line-through' : '' }`}></div>
            </div>
            <div className="add-to-next-day"
                    onClick={ () =>repeatNextDay(todo)}
                >
                {

                    todo.checked &&
                    <span>
                        <ArrowClockwise />
                    </span>
                }
            </div>
            <div className="delete-todo"
                onClick={() => handleDelete(todo)}
            >
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