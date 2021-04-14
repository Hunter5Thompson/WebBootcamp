import moment from 'moment';
import React, {useState, useEffect} from 'react';
import ToDo from './ToDo';

function Next7Days({toDos}) {
  const [weekToDos, setWeekToDos] = useState([])

  useEffect(() =>{
      const days = ['0' , '1' , '2' , '3' , '4', '5' , '6']


      const sortedToDosByDays = days.map( day => {
          return {
              toDos : toDos.filter( todo => todo.day === day ),
              number : day
          }
      })  

      const today = parseInt(moment().format('d'))

      const arrangeDays = sortedToDosByDays.slice(today).concat(sortedToDosByDays.slice('0',today))

      setWeekToDos(arrangeDays)
  }, [toDos]);






return (
    <div className="Next7Days">
        {

            weekToDos.map( day => 
                <div key={day.number}>
                    <div className="day">
                        <div className="name">
                            {moment(day.number, 'd').format('dddd')}
                            { day.number === moment().format('d') && '(Heute)'}
                        </div>
                        <div className="total-toDos">
                            ({day.toDos.length})
                        </div>
                        </div>
                        <div className="todos">
                            {
                                day.toDos.map( todo =>
                                    <ToDo key={todo.id} todo={todo}/>
                                    )
                            }
                        </div>
                    </div>

                )
        }
        </div>

)
}
export default Next7Days;