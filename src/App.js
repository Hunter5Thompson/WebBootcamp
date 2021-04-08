import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewToDo from './components/AddNewToDo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import ToDos from './components/ToDos';
import EditToDo from './components/EditToDo';

function App() {
  return (
    <div  className="App" >
      <Sidebar>
      <User />
      <AddNewToDo />
      <Calendar />
      <Projects />

      </Sidebar>
      <Main>
        <ToDos />
        <EditToDo />

        </Main>
    </div>
   
  );
}

export default App;
