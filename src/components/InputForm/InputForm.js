import { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const taskRef = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  const formSubmitHanlder = (event) => {
    event.preventDefault();

    if (enteredTask.length === 0) {
      taskRef.current.focus();
      return;
    }
    
    const newTask = {
        id: new Date().toISOString(),
        text: enteredTask,
        checked: false,
    };

    props.onSubmitTask(newTask);
    setEnteredTask('');
  };

  const enteredTaskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <form className={classes.todoForm} onSubmit={formSubmitHanlder}>
      <Input
        ref={taskRef}
        type="text"
        placeholder="Enter your task"
        onChange={enteredTaskChangeHandler}
        value={enteredTask}
      />
      <Button>Add</Button>
    </form>
  );
};

export default InputForm;
