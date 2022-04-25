import Form from './components/form';
import {Routes,Route} from "react-router-dom"
import './App.css';
import TodoList from './components/todoList';
function App() {
  
  return (
  <div className='todo-app'>
    {/* <Routes>
      <Route path="/" element={<Form/>} />
    </Routes> */}
    <TodoList/>
  </div>
  
  );
}

export default App;
