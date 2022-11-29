import { useState } from "react";
import "../../style/TodoTask.css"

function TodoTask (props){
    const [task, setTask] = useState("");
    const [isEdit, changeEditStatus] = useState(false);

    const handleEdit = (e) => {
        changeEditStatus(true);
        setTask(e.target.value);
    }

    const handleChange = (e)=>{
        setTask(e.target.value);
    }

    const handleEditSave = (e) => {
        e.preventDefault();
        changeEditStatus(false);
        props.setTodo(props.todoItem.id,task);
    }

    return (
        <form className="formShow" onSubmit = {handleEditSave}>
            <h3 className={`priority p${props.todoItem.priority.length}`}>{props.todoItem.priority}</h3>
            <input
                onDoubleClick={!isEdit ? handleEdit : console.log("yo")}
                className={props.todoItem.isCompleted? "completed showtask" : "showtask"}
                id={isEdit ? "edit" : ""}
                type="text"
                value={isEdit ? task : props.todoItem.task}
                onChange = {handleChange}
                readOnly = {isEdit ? "" : "readOnly"}
            />
            <h4 className="date">{props.todoItem.date}</h4>
        </form>
    );
}

export default TodoTask;