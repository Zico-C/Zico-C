import React, { useState, useReducer  } from "react";
import { ACTIONS } from "./Actions";
import styles from "./page8_01.module.scss";
import Todo from "./Todo";

const reducer = (todos:any, action:any) => {
  console.log(todos, action);
  const { todoContent, id } = action.payload;
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(todoContent)];
    case ACTIONS.TOGGLE:
      return todos.map((todo:any) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo:any) => todo.id !== id);
    default:
      return todos;
  }
};

const newTodo = (todoContent:any) => {
  return {
    id: Math.floor(Math.random() * 100000),
    todoContent,
    complete: false,
  };
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todoContent, setTodoContent] = useState("");



  const handleSubmit = (e:any) => {
    // preventDefault 取消送出事件
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { todoContent: todoContent } });
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="Type in Something ..."
        />
      </form>

      {todos.map((todo:any) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;
