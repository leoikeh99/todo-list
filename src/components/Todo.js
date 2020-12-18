import React, { Fragment, useState } from "react";
import TodoItem from "./TodoIitem";
import { ReactSortable } from "react-sortablejs";

const Todo = ({ todos, setComplete, deleteItem, filter, setTodos }) => {
  return (
    <ul className="todoItems">
      <ReactSortable animation={400} list={todos} setList={setTodos}>
        {todos.map((todo) => (
          <Fragment>
            {filter === "all" ? (
              <TodoItem
                todo={todo}
                setComplete={setComplete}
                deleteItem={deleteItem}
              />
            ) : filter === "completed" && todo.isCompleted ? (
              <TodoItem
                todo={todo}
                setComplete={setComplete}
                deleteItem={deleteItem}
              />
            ) : filter === "active" && !todo.isCompleted ? (
              <TodoItem
                todo={todo}
                setComplete={setComplete}
                deleteItem={deleteItem}
              />
            ) : null}
          </Fragment>
        ))}
      </ReactSortable>
    </ul>
  );
};

export default Todo;
