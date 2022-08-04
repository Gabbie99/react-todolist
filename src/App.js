import logo from './logo.svg';
import Strike from './Strike';
import './App.css';
import Counter from './Counter';
import ToDoList from './ToDoList';


function App() {
  var greet = "Hello everyone!"
  return (
    <div className="App">
      <header className="App-header">
    <ToDoList/>
      </header>
    </div>
  );
}

export default App;
