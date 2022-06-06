import classes from "./Input.module.css";
import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const taskRef = useRef();

  const inputFocus = () => {
    taskRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: inputFocus,
    };
  });

  return (
    <input
      className={classes.input}
      type={props.type}
      ref={taskRef}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
});

export default Input;
