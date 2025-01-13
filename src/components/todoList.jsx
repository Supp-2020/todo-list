import { TiTickOutline } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
const TodoList = ({ todoList, updateList }) => {
  const handleComplete = (todoListID) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.taskID === todoListID) {
        return { ...todo, isCompleted: true };
      } else {
        return todo;
      }
    });
    updateList(updatedTodoList);
  };
  const handleDelete = (todoListID, todoListIndex) => {
    const todotoDelete = todoList.find((todo) => todo.taskID === todoListID);
    if (todotoDelete && todotoDelete.isCompleted === true) {
      alert('Completed Task cannot be deleted!!!!');
      return;
    }
    const updatedTodoList = todoList.filter(
      (todo) => todo.taskID != todoListID
    );
    updateList(updatedTodoList);
  };
  return (
    <>
      {todoList.toReversed().map((item) => (
        <section
          key={item.taskID}
          className={`todo-content ${item.isCompleted ? 'completed' : ''}`}
        >
          <div className="todo-content-container">
            <p>{item.newTodo}</p>
            <div className="todo-content-buttons">
              <button
                className="todo-content-btn1 btn"
                onClick={() => handleComplete(item.taskID)}
              >
                <TiTickOutline />
              </button>
              <button
                className="todo-content-btn2 btn"
                onClick={() => handleDelete(item.taskID)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <hr className="todo-content-hr" />
        </section>
      ))}
    </>
  );
};
export default TodoList;
