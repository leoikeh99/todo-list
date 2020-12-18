import React from "react";
import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

const TodoIitem = ({ todo, setComplete, deleteItem }) => {
  return (
    <li key={todo.id} className="todoItem">
      <div className="spaceOut">
        <div
          onClick={() => setComplete(todo.id)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            className={`check ${
              todo.isCompleted ? "activeCheck" : "inactiveCheck"
            }`}
          >
            <img src={check} alt="" />
          </div>

          <p className={`${todo.isCompleted ? "complete" : ""}`}>
            <span className="line_wrap">
              <span
                className={`line ${
                  todo.isCompleted ? "activeLine" : "inactiveLine"
                }`}
              ></span>
              {todo.todo}
            </span>
          </p>
        </div>
        <img
          src={cross}
          alt=""
          className="cross"
          onClick={() => deleteItem(todo.id)}
        />
      </div>
    </li>
  );
};
export default TodoIitem;
