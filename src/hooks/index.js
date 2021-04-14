import {useState, useEffect} from 'react';
import firebase from '../firebase';

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