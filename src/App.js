import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  
  useEffect(() => {
    try {
      const storedTaskList = JSON.parse(localStorage.getItem('tasks') )|| [];
      if (storedTaskList) {
        setTaskList(storedTaskList);
      }
    } catch (error) {    }
  }, []);

  useEffect(() => {
    if(taskList.length > 0){
      localStorage.setItem('tasks', JSON.stringify(taskList));

    }
  }, [taskList]);

  const changeFilter = (filterName) => {
    setFilter(filterName);
}

  return (
    <div className="App">
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <div>
        <button  data-cy="filter-btn-all" onClick={e=>changeFilter("all")}>
        Toutes
      </button>
    <button  data-cy="filter-btn-done" onClick={e=>changeFilter("done")}>
        Complétées
    </button>
    <button data-cy="filter-btn-undone" onClick={e=>changeFilter("undone")}>
        Non complétées
    </button>
      </div>
      <TaskList taskList={taskList} setTaskList={setTaskList} filter={filter}  />
    </div>
  );
}

export default App;
