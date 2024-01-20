import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`${(task.done && props.hideDoneTasks) ? "tasks__item--hidden" : "tasks__item"}`}
            >
                <button className="tasks__button">{task.done ? "✓" : ""}</button>
                <span className={`${task.done ? "tasks__item--done" : ""}`}>{task.content}</span>
                <button className="tasks__button tasks__button--delete">×</button>
            </li>
        ))}
    </ul>
);

export default Tasks;