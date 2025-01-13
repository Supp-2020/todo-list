import { FaPlus } from 'react-icons/fa6';
import { useState } from 'react';

const AddTodo = ({ updateList }) => {
  const [todoItem, setTodoItem] = useState('');
  const addTask = () => {
    /* Ensures empty string are not taken */
    if (todoItem.trim() === '') {
      return;
    }
    const newTask = {
      newTodo: todoItem,
      isCompleted: false /* By default task is incomplete */,
      taskID: Math.floor(Math.random() * 10000000),
    };
    // console.log(newTask);
    const storedData = localStorage.getItem('TodoList');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    parsedData.push(newTask);
    // console.log(parsedData);
    // localStorage.setItem('TodoList', JSON.stringify(parsedData));
    updateList(parsedData);
    setTodoItem('');
  };
  return (
    <section className="todo-input">
      <input
        type="text"
        className="todo-input-field"
        placeholder="Add New Task..."
        onChange={(e) => setTodoItem(e.target.value)}
        value={todoItem}
      />
      <div className="todo-input-icon" onClick={addTask}>
        <FaPlus />
      </div>
    </section>
  );
};
export default AddTodo;
