import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`${(task.done && hideDone) ? "tasks__item--hidden" : "tasks__item"}`}
            >
                <button className="tasks__button">{task.done ? "✓" : ""}</button>
                <span className={`${task.done ? "tasks__item--done" : ""}`}>{task.content}</span>
                <button className="tasks__button tasks__button--delete" onClick={() => removeTask(task.id)}>×</button>
            </li>
        ))}
    </ul>
);

export default Tasks;