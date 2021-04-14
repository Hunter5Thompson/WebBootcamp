import {useState, useEffect} from 'react';
import firebase from '../firebase';
import moment from 'moment';

export function useToDos(){
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('ToDos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setToDos(data)
        })

        return () => unsubscribe()
    }, [])

    return toDos
}

export function useFilterToDos(toDos, selectedProject){
    const [filteredToDos, setFilteredToDos] = useState([])

    useEffect(() => {
        let data;
        const todayDateFormated = moment().format('DD/MM/YYYY')
        if(selectedProject === 'Heute'){
             data = toDos.filter(todo => todo.date === todayDateFormated)
        }else if(selectedProject === 'nächste 7 Tage'){
            data = toDos.filter(todo => {
                const toDoDate = moment(todo.date, 'DD/MM/YYYY')
                const todayDate = moment(todayDateFormated, 'DD/MM/YYYY')

                const differenceDays = toDoDate.diff(todayDate, 'days')
                return differenceDays >=0 && differenceDays < 7
            })
        }else if (selectedProject === 'Alle Tage'){
            data = toDos
        }else {
            data = toDos.filter(todo => todo.projektName === selectedProject)
        }

        setFilteredToDos(data)


    }, [toDos, selectedProject])

    return filteredToDos
}

export function useProjects(toDos){
    const [projects, setProjects] = useState([])

    function calculateNumOfToDos(projektName, toDos){
        return toDos.filter(toDos => toDos.projektName === projektName).length
    }

    useEffect(() =>{
        let unsubscribe = firebase
        .firestore()
        .collection('Projekte')
        .onSnapshot(snapshot => {
            const data = snapshot.docs.map ( doc =>{

                const projektName = doc.data().name
                return {
                    id : doc.id,
                    name : projektName,
                    numOfTodos : calculateNumOfToDos(projektName, toDos)
                    
                }
            })
            setProjects(data)
        })

        return() => unsubscribe()
    }, [])

    return projects
}