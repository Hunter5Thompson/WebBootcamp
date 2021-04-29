import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { ToDoContextProvider} from './context';
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
 <ToDoContextProvider>
    <App />
    </ToDoContextProvider>,
  document.getElementById('root')
);