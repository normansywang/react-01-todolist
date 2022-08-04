import { useState, useEffect } from "react";

import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import MainHeader from "./components/MainHeader/MainHeader";
import TodoList from "./components/TodoList/TodoList";
import Callout from "./components/UI/Callout/Callout";

function App() {
  const [todoList, setTodoList] = useState([]);
  // const [uncheckedTodoList, setUncheckedTodoList] = useState(todoList);
  const [filteredList, setFIlteredList] = useState(todoList);
  const [showChecked, setShowChecked] = useState(false);

  console.log(todoList);

  const submitTaskHandler = (task) => {
    setTodoList(prevList => {
      return [task, ...prevList];
    });
  };

  const checkTaskHandler = (id) => {
    setTodoList(prevList => {
      const newList = [...prevList];
      const targetTask = newList.find(task => task.id === id);
      targetTask.checked = !targetTask.checked;
      return newList;
    });
  };

  const newTasksClickHandler = () => {
    setShowChecked(false);
  }
  const completedClickHandler = () => {
    setShowChecked(true);
  }

  useEffect(() => {
    // check to do list, filter out checked tasks
    // const checkTasks = setTimeout(() => {
    //   console.log("Checking checked tasks");
    //   setUncheckedTodoList(todoList.filter(item => item.checked === false));
    // }, 500);
    // return () => {
    //   console.log("clean up");
    //   clearTimeout(checkTasks);
    // };

    if (showChecked) {
      setFIlteredList(todoList.filter(item => item.checked === true));
    } else {
      setFIlteredList(todoList.filter(item => item.checked === false));
    }
  }, [showChecked, todoList]);

  const newTasksClassName = showChecked ? "" : "active";
  const completedClassName = showChecked ? "active" : "";


  return (
    <div className="App">
      <MainHeader />
      <InputForm onSubmitTask={submitTaskHandler}/>
      <section className="todo_list">
        <div className="side_menu">
          <div onClick={newTasksClickHandler} className={newTasksClassName}>New Tasks</div>
          <div onClick={completedClickHandler} className={completedClassName}>Completed</div>
        </div>
        <div className="tasks">
          {todoList.length === 0 && <Callout>Empty To-do list</Callout>}
          <TodoList todoList={filteredList} onCheckTask={checkTaskHandler}/>
        </div>
      </section>
    </div>
  );
}

export default App;
