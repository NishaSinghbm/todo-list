import "../../style/Input.css";

function Input(props){
    const handleSubmit = (e)=>{
        e.preventDefault();
        const taskText = e.target[3].value;
        const priority = e.target[0].checked ? e.target[0].value : e.target[1].checked ? e.target[1].value : e.target[2].value;
        const date = e.target[4].value;
        console.log(typeof date);
        e.target[3].value = '';
        props.addTask(priority, taskText, date);
    }

    return(
        <form id="taskForm" onSubmit={handleSubmit}>
            <label className="inputLabel" id="low">
                <input type="radio" name="priority" id="priority" value="*" required/>
                *
            </label>
            <label className="inputLabel" id="medium">
                <input type="radio" name="priority" id="priority" value="**" required/>
                **
            </label>
            <label className="inputLabel" id="high">
                <input type="radio" name="priority" id="priority" value="***" required/>
                ***
            </label>
            <input type="text" name="task" id="taskInput" placeholder='What needs to be done?' required/>
            <input type="date" name="taskDate" id="taskDate" required/>
        </form>
    );
}

export default Input;