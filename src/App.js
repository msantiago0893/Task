import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskList />
        <TaskForm />
      </header>
    </div>
  );
}

export default App;
