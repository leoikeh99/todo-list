import React, { Fragment, useEffect, useState } from "react";
import Overview from "./components/Overview";
import Todo from "./components/Todo";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Complete online JavaScript course",
      isCompleted: false,
      id: "1",
    },
    {
      todo: "Jog around the park 3x",
      isCompleted: false,
      id: "2",
    },
    {
      todo: "10 minutes meditation",
      isCompleted: false,
      id: "3",
    },
    {
      todo: "Read for 1 hour",
      isCompleted: false,
      id: "4",
    },
    {
      todo: "Complete Todo App on Frontend Mentor",
      isCompleted: false,
      id: "5",
    },
  ]);
  const [filter, setFilter] = useState("all");

  const addItem = (e) => {
    e.preventDefault();
    if (text !== "") {
      setTodos([...todos, { todo: text, isCompleted: false, id: +new Date() }]);
    }
    setText("");
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

  const count = (todos) => {
    var amount = 0;
    todos.forEach((todo) => (!todo.isCompleted ? amount++ : (amount += 0)));
    return amount;
  };

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
              <li>{count(todos)} items left</li>
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
              <li
                onClick={() =>
                  setTodos(todos.filter((todo) => !todo.isCompleted))
                }
              >
                Clear Completed
              </li>
            </ul>
          </div>
        </div>
        <ul className="mobileTab ">
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
        <div className="text-center mb-1">
          <small>Drag and drop to reorder list</small>
          <div className="mb-1"></div>
          <small>
            <a href="https://www.frontendmentor.io/" target="_blank">
              Frontendmentor
            </a>
            challenge completed by
            <a href="https://github.com/leoikeh99" target="_blank">
              @wazza
            </a>
          </small>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
