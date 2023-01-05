import TaskItem from "./TaskItem";
import { PropTypes } from "prop-types";
import BTNSelectAll from "./btnSelectAll";
import BTNSelectComplited from "./btnSelectComplited";
import BTNSelectNotComplited from "./btnSelectNotComplited";

export default function TasksList(props) {
  return (
    <div className="list">
      <BTNSelectAll SelectAll={props.SelectAll} />
      <br />
      <BTNSelectComplited selectColmplited={props.selectColmplited} />
      <br />
      <BTNSelectNotComplited selectNotComplited={props.selectNotComplited} />
      <br />
      <br />
      Tasks List:
      {props.tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            completedTask={props.completedTask}
          />
        );
      })}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completedTask: PropTypes.func.isRequired,
};
