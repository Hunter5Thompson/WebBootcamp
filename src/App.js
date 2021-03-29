import './App.css';
import Header from './components/Header';
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
      <Header>
        <h1>Thunderdome</h1>
      <User />
      <AddNewToDo />
      <Calender />
      <Projects />

      </Header>
      <Main>
        <ToDos />
        <EditToDos />

        </Main>
    </div>
   
  );
}

export default App;
