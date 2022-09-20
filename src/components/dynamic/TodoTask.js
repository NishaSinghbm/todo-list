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
        <form onSubmit = {handleEditSave}>
            <input
                onDoubleClick={!isEdit ? handleEdit : console.log("yo")}
                className={props.todoItem.isCompleted? "completed showtask" : "showtask"}
                id={isEdit ? "edit" : ""}
                type="text"
                value={isEdit ? task : props.todoItem.task}
                onChange = {handleChange}
                readOnly = {isEdit ? "" : "readOnly"}
            />
        </form>
    );
}

export default TodoTask;