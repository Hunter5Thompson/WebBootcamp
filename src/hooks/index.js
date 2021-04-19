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
// filter hook sorgt dafür das die einzelnen ToDos auch nur in ihren Kategorien angezeigt werden
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
        }else if (selectedProject === 'alle Tage'){
            data = toDos
        }else {
            data = toDos.filter(todo => todo.projektName === selectedProject)
        }

        setFilteredToDos(data)


    }, [toDos, selectedProject])

    return filteredToDos
}
/*
-->Berechne die Anzahl der ToDOs für die jeweiligen Projekte
-->Update da die Abfrage keinen gültigen Wert bekommt nachdem man Projekte 
-->unchecked werden Parameter entfernt und in die neue Methode useProjectsWithStats
-->ausgelagert.
 */

export function useProjects(){
    const [projects, setProjects] = useState([])



    useEffect(() =>{
        let unsubscribe = firebase
        .firestore()
        .collection('Projekte')
        .onSnapshot(snapshot => {
            const data = snapshot.docs.map ( doc =>{

                
                return {
                    id : doc.id,
                    name : doc.data().name
                    
                    
                }
            })
            setProjects(data)
        })

        return () => unsubscribe()
    }, [ ])

    return projects
}



/* 

ALTBESTAND

    function calculateNumOfToDos(projektName, toDos){
        return toDos.filter(toDos => toDos.projektName === projektName).length
    }

    numOfTodos : calculateNumOfToDos(projektName, toDos)
*/

export function useProjectsWithStats(Projekte, ToDos){
    const [projectsWithStats, setProjectsWithStats] = useState([])

    useEffect(() => {
        const data = Projekte.map((project) =>{
            return {
                numOfTodos : ToDos.filter(todo => todo.projektName === project.name && !todo.checked).length,
                ...project
            }
        })

        setProjectsWithStats(data)
    }, [Projekte, ToDos])

    return projectsWithStats
} 
