import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      return -1;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) {
        return -1;
      }
      return 1;
    });
  }

  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} done={props.done} />
  ));

  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} done={props.done} />
  ));

  // const tasks= props.tasks.map(task=> (
  //     <Task key={task.id} task={task} delete={props.delete} done={props.done}/>
  // ))

  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań chillday</p>}
      </div>
      <div className="done">
        <h2>
          Zadania wykonane <em>({doneTasks.length})</em>
        </h2>
        {doneTasks.length > 5 && (
          <span className="info">
            Wyświetlone zostało 5 ostatnio wykonanych zadań!
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
