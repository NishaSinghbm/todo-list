import TodoTask from "./TodoTask";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

import "../../style/Todolist.css";

function TodoList(props){

    const handleDeleteShow = (e) => {
        e.currentTarget.children[2].style.visibility="visible";
        // can also use states
    }

    const handleDeleteHide = (e) => {
        e.currentTarget.children[2].style.visibility="hidden";
        // can also use states
    }

    const handleEdit = (id,updatedTask) => {
        props.editTask(id,updatedTask);
    }

    return(
        <div id="taskList">
            {props.TodoList.map((todoItem)=>{
                return (
                    <div key = {todoItem.id} className="taskRow" onMouseOver={handleDeleteShow} onMouseLeave={handleDeleteHide}>
                        {/* onMouseOver={cond ? func1() : func2()} */}
                        {/* <input className="checkComplete" key = {"input" + todoItem.id} type="checkbox" id={todoItem.id} checked={todoItem.isCompleted} onChange={()=>props.toggleStatus(todoItem.id)} /> */}
                        <Checkbox
                            className="checkComplete" key = {"input" + todoItem.id} type="checkbox" id={todoItem.id} checked={todoItem.isCompleted} onChange={()=>props.toggleStatus(todoItem.id)}
                            icon={
                                <div
                                    style={{
                                    display: "flex",
                                    flex: 1,
                                    backgroundColor: "#fff",
                                    }}
                                >
                                    <Icon.FiCheck color="green" size={29} />
                                    {/* 
                                    <Icon.FiChevronDown color="green" size={29} /> */}
                                </div>
                            }
                            borderColor="#dcdcdc"
                            // borderWidth={0}
                            borderRadius={30}
                            style={{ overflow: "hidden" ,transition: "1000ms"}}
                            size={30}
                        />
                        <TodoTask  setTodo = {handleEdit} key = {"task" + todoItem.id} todoItem = {todoItem}/>
                        <input key = {"delete" + todoItem.id} className="delete" onClick={()=>props.del(todoItem.id)} type="button" value="x"/>
                    </div>
                ) ;
            })}
        </div>

    );
}

export default TodoList;