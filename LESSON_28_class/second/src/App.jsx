import Header from "./components/Header";
import TaskForm from "./components/Tasks/TaskForm";
import TasksList from "./components/Tasks/TasksList";
import { useState } from "react";
import { getLocalStorage, removeLocalStorage, saveLocalStorage } from "./utils";
const TASKS_KEY = "tasks";

function App() {
  const [tasks, setTasks] = useState(getLocalStorage(TASKS_KEY) || []);

  function addTask(newTask) {
    const newTasks = [newTask, ...tasks];
    saveLocalStorage(TASKS_KEY, newTasks);
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    console.log(taskId);
    // tasks.filter((task)=> task.id !== taskId)
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        tasks.splice(i, 1);
        break;
      }
    }

    // localStorage.setItem("tasks", JSON.stringify(tasks))
    saveLocalStorage(TASKS_KEY, tasks);

    setTasks([...tasks]);
  }

  function completedTask(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;

    const newTasks = [...tasks];
    saveLocalStorage(TASKS_KEY, newTasks);

    setTasks(newTasks);
  }

  function deleteAllTask() {
    removeLocalStorage(TASKS_KEY);
    setTasks([]);
  }
  function SelectAll() {
    console.log("ALL");
    setTasks(getLocalStorage(TASKS_KEY));
  }
  function SelectOnlyComplitedTasks() {
    console.log("COMPLITED");
    setTasks((prev) => prev.filter((task) => task.completed === true));
  }
  function SelectOnlyNotComplitedTasks() {
    console.log("NOT COMPLITED");
    setTasks((prev) => prev.filter((task) => task.completed === false));
  }

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={addTask} deleteAll={deleteAllTask} />
      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
        completedTask={completedTask}
        SelectAll={SelectAll}
        selectColmplited={SelectOnlyComplitedTasks}
        selectNotComplited={SelectOnlyNotComplitedTasks}
      />
    </div>
  );
}

export default App;
