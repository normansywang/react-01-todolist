import { useRef } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const checkboxRef = useRef();

  const itemClickHandler = () => {
    props.onCheckTask(props.id);
  };

  let checkboxClass = classes.checkbox;
  if (props.checked) {
    checkboxClass += ` ${classes.checked}`;
  }

  return (
    <div className={classes.card} onClick={itemClickHandler}>
      <div className={checkboxClass} ref={checkboxRef}></div>
      <p>{props.children}</p>
    </div>
  );
};

export default TodoItem;
