import { ACTIONS } from "./Actions";
import styles1 from "./page8_01.module.scss";

const Todo = ({ todo, dispatch }:{todo:any ; dispatch:any}) => {
  return (
    <div className={styles1.main}>
      <span style={{ textDecoration: todo.complete ? "line-through" : undefined }}>
        {todo.todoContent}
      </span>
      <button
        className={styles1.toggle}
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        {todo.complete ? "Cancel" : "Complete"}
      </button>
      <button
        className={styles1.delete}
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;