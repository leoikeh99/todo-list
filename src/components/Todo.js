import React, { Fragment, useState } from "react";
import TodoItem from "./TodoIitem";
import { ReactSortable } from "react-sortablejs";

const Todo = ({ todos, setComplete, deleteItem, filter, setTodos }) => {
  const [state, setState] = useState([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
  ]);
  return (
    <ul className="todoItems">
      <ReactSortable swap list={todos} setList={setTodos}>
        {todos.map((todo) => (
          <Fragment>
            {filter === "all" ? (
              <li key={todo.id} className="todoItem">
                <TodoItem
                  todo={todo}
                  setComplete={setComplete}
                  deleteItem={deleteItem}
                />
              </li>
            ) : filter === "completed" && todo.isCompleted ? (
              <li key={todo.id} className="todoItem">
                <TodoItem
                  todo={todo}
                  setComplete={setComplete}
                  deleteItem={deleteItem}
                />
              </li>
            ) : filter === "active" && !todo.isCompleted ? (
              <li key={todo.id} className="todoItem">
                <TodoItem
                  todo={todo}
                  setComplete={setComplete}
                  deleteItem={deleteItem}
                />
              </li>
            ) : null}
          </Fragment>
        ))}
      </ReactSortable>
    </ul>
  );
};

export default Todo;
