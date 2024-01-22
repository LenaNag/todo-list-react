import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toogleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item${(task.done && hideDone) ? " tasks__item--hidden" : ""}`}
            >
                <button
                    className="tasks__button"
                    onClick={() => toogleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__item--done" : ""}`}>{task.content}</span>
                <button className="tasks__button tasks__button--delete" onClick={() => removeTask(task.id)}>×</button>
            </li>
        ))}
    </ul>
);

export default Tasks;