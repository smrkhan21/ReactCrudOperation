// Creating Todo App (Crud Operation)
import { useState } from "react";
import "./styles.css";
const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [button, setButton] = useState("Add Task");
  const [prevstate, setPrevstate] = useState("");
  const AddTask = () => {
    if (button == "Update Task") {
      setTodos(
        todos.map((todo) => {
          if (todo == prevstate) {
            return value;
          } else {
            return todo;
          }
        })
      );
      setValue("");
      setPrevstate("");
    } else {
      todos.push(value);
      setTodos(todos);
      setValue("");
      setPrevstate("");
    }
  };

  const Edit = (t) => {
    setPrevstate(t);
    setValue(t);
    setButton("Update Task");
  };

  const Delete = (t) => {
    setTodos(todos.filter((todo) => todo !== t));
  };
  return (
    <>
      <div className="main">
        <h1>Todo List</h1>
        <label>
          <input
            className="todo_input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a Task"
          />
          <button onClick={() => AddTask()}>{button}</button>
        </label>
        <div className="todo-list">
          {todos.length > 0 ? (
            <>
              <ul>
                {todos.map((t) => {
                  return (
                    <li key={t}>
                      {t} <button onClick={() => Edit(t)}>Edit</button>
                      <button onClick={() => Delete(t)}>Delete</button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p>No Tasks Found!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
