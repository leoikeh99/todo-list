import React, { Fragment, useEffect, useState } from "react";
import Overview from "./components/Overview";
import Todo from "./components/Todo";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addItem = (e) => {
    e.preventDefault();
    if (text !== "") {
      setTodos([
        ...todos,
        { todo: text, isCompleted: false, id: +new Date(), show: true },
      ]);
    }
    setText("");
    console.log(todos);
  };

  const setComplete = (id) => {
    setTodos(
      todos.map((item) =>
        !item.isCompleted && item.id === id
          ? { ...item, isCompleted: true }
          : item.isCompleted && item.id === id
          ? { ...item, isCompleted: false }
          : { ...item }
      )
    );
  };

  const deleteItem = (id) => setTodos(todos.filter((item) => item.id !== id));

  return (
    <Fragment>
      <div className="container">
        <Overview title="Todo" />

        <form action="" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Create a todo"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>

        <div className="todo">
          <Todo
            todos={todos}
            setComplete={setComplete}
            deleteItem={deleteItem}
            filter={filter}
            setTodos={setTodos}
          />

          <div className="bottomTab">
            <ul>
              <li>5 items left</li>
              <ul>
                <li
                  className={filter === "all" ? "active" : ""}
                  onClick={() => setFilter("all")}
                >
                  All
                </li>
                <li
                  className={filter === "active" ? "active" : ""}
                  onClick={() => setFilter("active")}
                >
                  Active
                </li>
                <li
                  className={filter === "completed" ? "active" : ""}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </li>
              </ul>
              <li>Clear Completed</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
