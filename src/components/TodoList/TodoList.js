import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const content = props.todoList.map((item) => {
    return (
      <TodoItem key={item.id} id={item.id} onCheckTask={props.onCheckTask} checked={item.checked}>
        {item.text}
      </TodoItem>
    );
  });

  return <div className={classes.list_container}>{content}</div>;
};

export default TodoList;
