import { useEffect, useState } from 'react';
import '../styles/App.css';
import AddTodo from './addTodo';
import TodoList from './todoList';
function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    loadStoredData();
  }, []);
  /* Loading data on mount and page reload */
  const loadStoredData = () => {
    const storedData = localStorage.getItem('TodoList');
    if (storedData) {
      setTodoList(JSON.parse(storedData));
    }
  };
  const updateList = (NewList) => {
    localStorage.setItem('TodoList', JSON.stringify(NewList));
    setTodoList(NewList);
  };
  return (
    <main className="todo-container">
      <div className="todo-header">
        <h1 className="todo-heading">Todo List</h1>
        <AddTodo updateList={updateList} />
      </div>
      <TodoList todoList={todoList} updateList={updateList} />
    </main>
  );
}

export default App;
