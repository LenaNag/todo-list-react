import "./style.css";

const Buttons = ({ tasks, hideDone, toogleHideDone }) => (
    <div className="section__buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toogleHideDone} className="section__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="section__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;