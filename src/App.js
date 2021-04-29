import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewToDo from './components/AddNewToDo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import ToDos from './components/ToDos';
import EditToDo from './components/EditToDo';
import SignUp from './components/SignUp';

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


{/* <Container className="d-flex aöign-items-center justify-content-center"
style={{ minHeight: '100vh'}}
><div className="w-100" style={{maxWidth: "400px"}}
<SignUp/>
</div>
</Container> */}