import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewToDo from './components/AddNewToDo';
import Calender from './components/Calender';
import Projects from './components/Projects';
import ToDos from './components/ToDos';
import EditToDos from './components/EditToDos';

function App() {
  return (
    <div  className="App" >
      <Sidebar>
        <h1>Thunderdome</h1>
      <User />
      <AddNewToDo />
      <Calender />
      <Projects />

      </Sidebar>
      <Main>
        <ToDos />
        <EditToDos />

        </Main>
    </div>
   
  );
}

export default App;
