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
                key={todo.id}
              />
            ) : filter === "completed" && todo.isCompleted ? (
              <TodoItem
                todo={todo}
                setComplete={setComplete}
                deleteItem={deleteItem}
                key={todo.id}
              />
            ) : filter === "active" && !todo.isCompleted ? (
              <TodoItem
                todo={todo}
                setComplete={setComplete}
                deleteItem={deleteItem}
                key={todo.id}
              />
            ) : null}
          </Fragment>
        ))}
      </ReactSortable>
    </ul>
  );
};

export default Todo;
